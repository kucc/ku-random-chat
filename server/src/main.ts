import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as mongoose from 'mongoose';
import * as cookieParser from 'cookie-parser';
import { clientConfig } from './common/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [clientConfig.clientURL],
    credentials: true,
  });
  app.use(cookieParser());
  app.setGlobalPrefix('api');
  await app.listen(3000);
  mongoose.set('debug', true);
}
bootstrap();
