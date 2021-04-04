import { Document } from 'mongoose';
import { UserModel } from './user.model';

export interface ReportModel extends Document {
  reporter: UserModel;
  reportedUser: UserModel;
  description: string;
}
