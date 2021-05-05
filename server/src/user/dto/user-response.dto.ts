import { UserModel } from 'src/common/model/user.model';

export class UserResponseDTO {
  constructor(userModel: UserModel) {
    this.userId = userModel.userId;
    this.email = userModel.email;
    this.sex = userModel.sex;
    this.age = userModel.age;
    this.major = userModel.major;
    this.emailCertified = userModel.emailCertified;
    this.reportedCount = userModel.reportedCount;
    this.isBlocked = userModel.isBlocked;
    this.blockDuration = userModel.blockDuration;
  }

  public readonly userId: string;
  public readonly email: string;
  public readonly sex: string;
  public readonly age: number;
  public readonly major: number;
  public readonly emailCertified: boolean;
  public readonly reportedCount: number;
  public readonly isBlocked: boolean;
  public readonly blockDuration: Date;
}
