import { Injectable, NotFoundException, ServiceUnavailableException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from '../common/model/user.model';
import { EnterInfoDTO } from './dto/enter-info.dto';
import { userIdPwDTO } from './dto/modify-password.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserModel>,
  ) {}

  async findUserById(userId: string): Promise<UserModel> {
    const userDoc = await this.userModel.findOne({ userId });
    if (!userDoc) {
      throw new NotFoundException('There is no corresponding user Id');
    }

    return userDoc;
  }

  async findUserByEmail(email: string): Promise<UserModel> {
    const userDoc = await this.userModel.findOne({ email });
    if (!userDoc) {
      throw new NotFoundException('There is no corresponding user Email');
    }

    return userDoc;
  }

  async addInfo(userId: string, age: number, major: string, sex: string) {
    const userDoc = await this.userModel.findOne({ userId });
    if (!userDoc) {
      throw new NotFoundException('There is no corresponding user Id');
    }

    const updatedUser = await this.userModel.findOneAndUpdate(
      {userId: userId},
      {
        age: age,
        major: major,
        sex: sex,
      },
    )

    await userDoc.save().catch(() => {
      throw new ServiceUnavailableException();
    });
    return updatedUser;
  }

  async modifyPassword(userId: string, password: string) {
    const userDoc = await this.userModel.findOne({ userId });
    if (!userDoc) {
      throw new NotFoundException('There is no corresponding user Id');
    }

    userDoc.password = password;
    
    const updatedUser = await userDoc.save().catch(() => {
      throw new ServiceUnavailableException();
    });
    return updatedUser;
  }

}
