import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from '../common/model/user.model';
import * as argon2 from 'argon2';
import { SignUpDTO } from './dto/sign-up.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserModel>,
  ) {}

  async createNewUser(signUpDTO: SignUpDTO) {
    const { userId, password, email } = signUpDTO;
    const hashedPassword = await argon2.hash(signUpDTO.password);
    const newUser = new this.userModel({
      userId,
      password: hashedPassword,
      email,
    });
    await newUser.save();
  }

  async isUniqueUserId(userId: string) {
    const user = await this.userModel.findOne({ userId });
    return user ? false : true;
  }

  async isUniqueEmail(email: string) {
    const user = await this.userModel.findOne({ email });
    return user ? false : true;
  }
}
