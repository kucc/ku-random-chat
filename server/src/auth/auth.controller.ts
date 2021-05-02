import {
  Body,
  Controller,
  forwardRef,
  Inject,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { SignInDTO } from './dto/sign-in.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,

    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}

  @Post('/sign-in')
  async signIn(@Res() response: Response, @Body() signinDTO: SignInDTO) {
    const accessToken = await this.authService.signIn(signinDTO);

    return response.cookie('AccessToken', accessToken);
  }
}
