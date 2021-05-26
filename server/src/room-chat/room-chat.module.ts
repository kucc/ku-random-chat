import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomChatController } from './room-chat.controller';
import { RoomChatService } from './room-chat.service';
import ChatSchema from 'src/common/schemas/chat.schema';
import { RoomChatGateway } from './room-chat.gateway';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Chat', schema: ChatSchema }])],
  controllers: [RoomChatController],
  providers: [RoomChatService, RoomChatGateway],
  exports: [RoomChatService],
})
export class RoomChatModule {}
