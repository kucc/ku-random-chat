import * as mongoose from 'mongoose';

const { String, Number, Date, Boolean } = mongoose.Schema.Types;

const UserSchema = new mongoose.Schema({
  userId: { type: String, required: 'user id is required' },
  email: { type: String, required: 'user email is required' },
  password: { type: String, required: 'user password is required' },
  sex: String,
  age: Number,
  major: Number,
  emailVerified: { type: Boolean, default: false },
  reportedCount: { type: Number, default: 0 },
  isBlocked: { type: Boolean, default: false },
  blockDuration: Date,
});

export default UserSchema;
