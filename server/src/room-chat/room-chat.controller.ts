import { Controller } from '@nestjs/common';
import { RoomChatService } from './room-chat.service';
@Controller('chat')
export class RoomChatController {
  constructor(private readonly chatservice: RoomChatService) {}
}
