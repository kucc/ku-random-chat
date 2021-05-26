import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { clientConfig } from 'src/common/config';

@WebSocketGateway({
  namespace: 'random',
  cors: { origin: clientConfig.clientURL },
})
export class RandomChatGateway {
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }
}
