import { Document } from 'mongoose';

export interface ChatModel extends Document {
  roomId: number;
  sender: string;
  message: string;
  time: Date;
}
