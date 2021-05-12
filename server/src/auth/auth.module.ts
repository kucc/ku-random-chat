import { Module,forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import UserSchema from '../common/schemas/user.schema';
import { UserModule } from 'src/user/user.module';
@Module({
  imports: [forwardRef(() => UserModule), MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
