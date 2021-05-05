import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { JwtConfig } from 'src/common/config';
import { UserModel } from 'src/common/model/user.model';
import { UserResponseDTO } from 'src/user/dto/user-response.dto';
import { UserService } from 'src/user/user.service';
import { SignInDTO } from './dto/sign-in.dto';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}

  createAccessToken(userModel: UserModel) {
    const userResponseDTO = new UserResponseDTO(userModel);
    const accessToken = jwt.sign(
      { data: userResponseDTO, timestamp: Date.now() },
      JwtConfig.tokenSecret,
      { expiresIn: JwtConfig.tokenExpiresIn },
    );

    return accessToken;
  }

  async signIn(signinDTO: SignInDTO) {
    const userRecord = await this.userService.findUserById(signinDTO.userId);
    const isValidPassword = await argon2.verify(
      userRecord.password,
      signinDTO.password,
    );
    if (!isValidPassword) {
      throw new BadRequestException('not valid password');
    }

    return this.createAccessToken(userRecord);
  }
}
