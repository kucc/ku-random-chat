import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRoomDTO } from './dto/create-room.dto';
import { RoomService } from './room.service';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get('')
  getRoomList() {
    const roomList = this.roomService.getRoomList();

    return roomList;
  }

  @Post('create-room')
  createRoom(@Body() createRoomBody: CreateRoomDTO) {
    const { roomTitle } = createRoomBody;
    const newRoom = this.roomService.createNewChatRoom(roomTitle);

    return newRoom;
  }
}
