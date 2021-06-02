import { Document } from 'mongoose';

export interface UserModel extends Document {
  userId: string;
  email: string;
  password: string;
  age: number;
  major: string;
  sex: string;
  emailVerified: boolean;
  verificationCode: string;
  reportedCount: number;
  isBlocked: boolean;
  blockDuration: Date;
}
