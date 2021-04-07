import * as mongoose from 'mongoose';
import UserModel from './user.schema';

const { String } = mongoose.Schema.Types;

const ReportSchema = new mongoose.Schema({
  reporter: UserModel,
  reportedUser: UserModel,
  description: String,
});

export default ReportSchema;
