import { IsNotEmpty } from 'class-validator';

export class CreateMessageDTO {
  @IsNotEmpty()
  roomId: number;

  @IsNotEmpty()
  sender: string;

  @IsNotEmpty()
  message: string;

  @IsNotEmpty()
  time: Date;
}
