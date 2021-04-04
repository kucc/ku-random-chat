import { Document } from 'mongoose';
import { UserModel } from './user.model';

export interface RoomModel extends Document {
  isOpened: boolean;
  isRandom: boolean;
  maxMember: number;
  members: [UserModel];
}
