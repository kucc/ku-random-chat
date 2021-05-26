import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomChatModule } from './room-chat/room-chat.module';
import { ReportModule } from './report/report.module';
import { RoomModule } from './room/room.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { RandomChatModule } from './random-chat/random-chat.module';
import { DeserializeUserMiddleware } from './common/middleware/deserialize-user';
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_CONFIG),
    RoomChatModule,
    ReportModule,
    RoomModule,
    UserModule,
    AuthModule,
    RandomChatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply(DeserializeUserMiddleware).forRoutes('*');
  }
}
