import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoomModel } from 'src/common/model/room.model';
import Room from './model/room';
@Injectable()
export class RoomService {
  chatRoomList: Room[];
  constructor(
    @InjectModel('Room') private readonly roomModel: Model<RoomModel>,
  ) {
    this.chatRoomList = [];
  }

  createNewChatRoom(title: string) {
    const newRoom = {} as Room;
    newRoom.roomId = this.chatRoomList.length + 1;
    newRoom.roomTitle = title;
    this.chatRoomList.push(newRoom);

    return newRoom;
  }

  getRoomList() {
    return this.chatRoomList;
  }
}
