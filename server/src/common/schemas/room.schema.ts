import * as mongoose from 'mongoose';
import UserSchema from './user.schema';

const { Number, Boolean } = mongoose.Schema.Types;

const RoomSchema = new mongoose.Schema({
  isOpend: Boolean,
  isRandom: Boolean,
  maxMember: Number,
  members: [UserSchema],
});

export default RoomSchema;
