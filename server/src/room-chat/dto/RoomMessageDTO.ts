import { ChatModel } from 'src/common/model/chat.model';

export class RoomMessageDTO {
  constructor(chatModel: ChatModel) {
    this.roomId = chatModel.roomId;
    this.sender = chatModel.sender;
    this.message = chatModel.message;
    this.time = chatModel.time;
  }

  public readonly roomId: number;
  public readonly sender: string;
  public readonly message: string;
  public readonly time: Date;
}
