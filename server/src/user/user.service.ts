import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from '../common/model/user.model';

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
}
