import {
  MessageBody,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { clientConfig } from './common/config';

@WebSocketGateway({ cors: { origin: clientConfig.clientURL } })
export class AppGateway implements OnGatewayInit {
  @WebSocketServer() server: Server;

  @SubscribeMessage('events')
  handleConnect(@MessageBody() data: string): string {
    console.log(data);
    return data;
  }

  @SubscribeMessage('chat message')
  handleMessage(@MessageBody() data: string): string {
    console.log('message: ' + data);
    return data;
  }
  afterInit(server: Server) {
    console.log('connected');
  }
}
