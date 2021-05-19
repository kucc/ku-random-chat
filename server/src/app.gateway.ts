import {
  MessageBody,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatService } from './chat/chat.service';
import { clientConfig } from './common/config';

@WebSocketGateway({
  cors: { origin: clientConfig.clientURL },
})
export class RoomGateWay implements OnGatewayInit {
  constructor(private readonly chatService: ChatService) {}
  @WebSocketServer() server: Server;

  @SubscribeMessage('joinRoom')
  handleConnect(client: Socket, { roomId }) {
    client.join(roomId);
  }

  @SubscribeMessage('send message')
  async handleMessage(client: Socket, { roomId, sender, message, time }) {
    await this.chatService.createNewMessage({ roomId, sender, message, time });
    this.server.to(roomId).emit('chatToClient', { sender, message, time });
  }

  afterInit(server: Server) {
    console.log('room chat init');
  }
}
