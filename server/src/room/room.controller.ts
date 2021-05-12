import { Body, Controller, Post } from '@nestjs/common';
import { RoomService } from './room.service';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post('create-room')
  createRoom(@Body() roomTitle: string) {
    const newRoom = this.roomService.createNewChatRoom(roomTitle);

    return newRoom;
  }
}
