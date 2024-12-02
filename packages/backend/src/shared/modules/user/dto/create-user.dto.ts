import { IsEmail, IsString, Length } from 'class-validator';
import { CreateUserMessages } from './create-user.messages.js';

export class CreateUserDto {
  @IsEmail({}, { message: CreateUserMessages.email.invalidFormat })
  public email: string;

  @IsString({ message: CreateUserMessages.firstName.invalidFormat })
  public firstName: string;

  @IsString({ message: CreateUserMessages.password.invalidFormat })
  @Length(8, 30, { message: CreateUserMessages.password.lengthField })
  public password: string;
}
