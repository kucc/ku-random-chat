import { Document } from 'mongoose';

export interface UserModel extends Document {
  userId: string;
  email: string;
  password: string;
  sex: string;
  age: number;
  major: number;
  reportedCount: number;
  isBlocked: boolean;
  blockDuration: Date;
}
