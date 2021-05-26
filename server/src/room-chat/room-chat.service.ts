import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChatModel } from '../common/model/chat.model';
import { RoomMessageDTO } from './dto/RoomMessageDTO';

@Injectable()
export class RoomChatService {
  constructor(
    @InjectModel('Chat') private readonly chatModel: Model<ChatModel>,
  ) {}

  async createNewMessage(createMessageDTO: RoomMessageDTO) {
    const newMessage = new this.chatModel(createMessageDTO);
    await newMessage.save();
  }
}
