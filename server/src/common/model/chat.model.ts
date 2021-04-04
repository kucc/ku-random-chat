import { Document } from 'mongoose';

export interface ChatModel extends Document {
  objectId: string;
  userName: string;
  message: string;
}
