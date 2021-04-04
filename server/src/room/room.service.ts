import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoomModel } from 'src/common/model/room.model';

@Injectable()
export class RoomService {
  constructor(
    @InjectModel('Room') private readonly roomModel: Model<RoomModel>,
  ) {}
}
