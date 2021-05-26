import { Module } from '@nestjs/common';
import { RandomChatService } from './random-chat.service';
import { RandomChatController } from './random-chat.controller';

@Module({
  providers: [RandomChatService],
  controllers: [RandomChatController]
})
export class RandomChatModule {}
