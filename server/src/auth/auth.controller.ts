import { SignUpDTO } from './dto/sign-up.dto';
import {
  Body,
  Controller,
  forwardRef,
  Inject,
  Get,
  Post,
  Res,
  BadRequestException,
  Param,
  Req,
  Redirect,
} from '@nestjs/common';
import { Response } from 'express';
import { AccessTokenConfig } from 'src/common/config';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { SignInDTO } from './dto/sign-in.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from 'src/common/model/user.model';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    @InjectModel('User') private readonly userModel: Model<UserModel>,
  ) {}

  @Post('/sign-up')
  async signUp(@Body() signUpDTO: SignUpDTO) {
    const { userId, email } = signUpDTO;
    const isUniqueUserId = await this.authService.isUniqueUserId(userId);
    const isUniqueEmail = await this.authService.isUniqueEmail(email);

    if (!isUniqueUserId) {
      throw new BadRequestException({
        message: '이미 존재하는 아이디입니다',
      });
    }

    if (!isUniqueEmail) {
      throw new BadRequestException({
        message: '이미 회원 가입된 이메일입니다',
      });
    }

    await this.authService.createNewUser(signUpDTO);
    await this.authService.sendVerificationEmail(email);
  }

  @Get('/verification/:token')
  async verification(@Res() response: Response, @Param('token') token: string) {
    const user = await this.userModel.findOne({ verificationCode: token });
    if (user.verificationCode == token) {
      user.emailVerified = true;
      await user.save();
      response.redirect('http://localhost:8080/sign-in');
    }
  }

  @Get('/verification-check/:userId')
  async verificationCheck(@Param('userId') userId: string) {
    const user = await this.userService.findUserById(userId);
    return user.emailVerified ? true : false;
  }

  @Post('/sign-in')
  async signIn(@Res() res: Response, @Body() signinDTO: SignInDTO) {
    const accessToken = await this.authService.signIn(signinDTO);

    res.cookie('AccessToken', accessToken, {
      maxAge: AccessTokenConfig.cookieExpiresIn,
    });
    res.json('success');
  }
}
