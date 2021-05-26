import { UserModel } from 'src/common/model/user.model';

export class UserResponseDTO {
  constructor(userModel: UserModel) {
    this.userId = userModel.userId;
    this.email = userModel.email;
    this.age = userModel.age;
    this.major = userModel.major;
    this.sex = userModel.sex;
    this.emailVerified = userModel.emailVerified;
    this.reportedCount = userModel.reportedCount;
    this.isBlocked = userModel.isBlocked;
    this.blockDuration = userModel.blockDuration;
  }

  public readonly userId: string;
  public readonly email: string;
  public readonly age: number;
  public readonly major: string;
  public readonly sex: string;
  public readonly emailVerified: boolean;
  public readonly reportedCount: number;
  public readonly isBlocked: boolean;
  public readonly blockDuration: Date;
}
