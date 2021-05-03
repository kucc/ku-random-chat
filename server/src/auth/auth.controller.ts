import { Body, Controller, Post, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDTO } from './dto/sign-up.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

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
  }
}
