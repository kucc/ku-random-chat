import { IsNotEmpty } from 'class-validator';

export class SignUpDTO {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  email: string;
}
