import { Controller, forwardRef, Inject } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
}
