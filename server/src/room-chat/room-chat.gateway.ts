import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { clientConfig } from 'src/common/config';
import { RoomMessageDTO } from './dto/RoomMessageDTO';
import { RoomChatService } from './room-chat.service';

@WebSocketGateway({
  namespace: 'room',
  cors: { origin: clientConfig.clientURL },
})
export class RoomChatGateway {
  constructor(private readonly roomChatService: RoomChatService) {}
  @WebSocketServer() server: Server;

  @SubscribeMessage('joinRoom')
  handleConnect(client: Socket, { roomId }) {
    client.join(roomId);
  }

  @SubscribeMessage('send message')
  async handleMessage(client: Socket, roomMessage: RoomMessageDTO) {
    const { roomId } = roomMessage;
    await this.roomChatService.createNewMessage(roomMessage);
    this.server.to(roomId.toString()).emit('chatToClient', roomMessage);
  }
}
