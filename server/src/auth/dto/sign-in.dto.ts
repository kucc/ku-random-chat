import { IsNotEmpty } from 'class-validator';

export class SignInDTO {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  password: string;
}
