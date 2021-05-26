import { Controller, forwardRef, Inject, Post, Get, Res, Req, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from 'src/auth/auth.service';
import { UserService } from './user.service';
import { UserResponseDTO } from './dto/user-response.dto';
import { EnterInfoDTO } from './dto/enter-info.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from 'src/common/model/user.model';
import { userIdPwDTO } from './dto/modify-password.dto';
import * as jwt from 'jsonwebtoken';


@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    @InjectModel('User') private readonly userModel: Model<UserModel>,
  ) {}

  @Post('/enter-info')
  async enterInfo(
    @Req() request: Request,
    @Res() response: Response,
    @Body() enterInfoDTO: EnterInfoDTO,
  ) {
    const { accessToken } = request.cookies
    const { data }: any = jwt.verify(accessToken, process.env.JWT_SECRET);
    if (!data){
      response.clearCookie('accessToken');
    }
    const updatedUser = await this.userService.addInfo(
      data.userId, enterInfoDTO.age, enterInfoDTO.major, enterInfoDTO.sex,
    )

    return updatedUser
  }

  @Get('/user-info')
  async getUserInfo(@Req() request: Request, @Res() response: Response): Promise<UserResponseDTO> {
    const { accessToken } = request.cookies
    const { data }: any = jwt.verify(accessToken, process.env.JWT_SECRET);
    if (!data){
      response.clearCookie('accessToken');
    }
    const userInfo = await this.userService.findUserById(data.userId);
    return new UserResponseDTO(userInfo);
  }

  @Post('/modify-password')
  async modifyPassword(
    @Req() request: Request, 
    @Res() response: Response,
    @Body() userIdPw: userIdPwDTO) {
    const { accessToken } = request.cookies
    const { data }: any = jwt.verify(accessToken, process.env.JWT_SECRET);
    if (!data){
      response.clearCookie('accessToken');
    }
    const updatedUser = await this.userService.modifyPassword(userIdPw.userId, userIdPw.password)
    return updatedUser
  }


}
