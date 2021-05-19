import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChatModel } from '../common/model/chat.model';
import { CreateMessageDTO } from './dto/createMessageDTO.dto';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel('Chat') private readonly chatModel: Model<ChatModel>,
  ) {}

  async createNewMessage(createMessageDTO: CreateMessageDTO) {
    const newMessage = new this.chatModel(createMessageDTO);
    await newMessage.save();
  }
}
