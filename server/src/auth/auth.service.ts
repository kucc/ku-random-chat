import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { JwtConfig } from 'src/common/config';
import { UserModel } from 'src/common/model/user.model';
import { UserResponseDTO } from 'src/user/dto/user-response.dto';

@Injectable()
export class AuthService {
  createAccessToken(userModel: UserModel) {
    const userResponseDTO = new UserResponseDTO(userModel);
    const accessToken = jwt.sign(
      { data: userResponseDTO, timestamp: Date.now() },
      JwtConfig.tokenSecret,
      { expiresIn: JwtConfig.tokenExpiresIn },
    );

    return accessToken;
  }
}
