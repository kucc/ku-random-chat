import { IsString } from 'class-validator';

export class CreateRoomDTO {
  @IsString()
  roomTitle: string;
}
