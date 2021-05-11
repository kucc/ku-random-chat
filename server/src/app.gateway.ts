import {
  MessageBody,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { clientConfig } from './common/config';

@WebSocketGateway({
  cors: { origin: clientConfig.clientURL },
})
export class RoomGateWay implements OnGatewayInit {
  @WebSocketServer() server: Server;

  @SubscribeMessage('joinRoom')
  handleConnect(client: Socket, { roomId }) {
    client.join(roomId);
    this.server.emit('echo', 'echo from server');
  }

  @SubscribeMessage('send message')
  handleMessage(client: Socket, { sender, roomId, message, time }) {
    this.server.to(roomId).emit('chatToClient', { sender, message, time });
  }

  afterInit(server: Server) {
    console.log('room chat init');
  }
}
