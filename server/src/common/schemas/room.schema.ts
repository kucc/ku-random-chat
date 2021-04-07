import * as mongoose from 'mongoose';
import UserModel from './user.schema';

const { Number, Boolean, ObjectId } = mongoose.Schema.Types;

const RoomSchema = new mongoose.Schema({
  isOpend: Boolean,
  isRandom: Boolean,
  maxMember: Number,
  members: [UserModel],
});

export default RoomSchema;
