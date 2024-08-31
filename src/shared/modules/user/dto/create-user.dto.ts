import { IsEmail, IsString, Length, IsEnum } from 'class-validator';

import { UserType } from '../../../types/index.js';
import { CreateUserMessages } from './create-user.messages.js';

export class CreateUserDto {
  @IsString({ message: CreateUserMessages.firstName.invalidFormat })
  public firstName: string;

  @IsEmail({}, { message: CreateUserMessages.email.invalidFormat })
  public email: string;

  @IsString({ message: CreateUserMessages.avatarPath.invalidFormat })
  public avatarPath?: string;

  @IsString({ message: CreateUserMessages.password.invalidFormat })
  @Length(6, 12, { message: CreateUserMessages.password.lengthField })
  public password: string;

  @IsString({ message: CreateUserMessages.common.string })
  @IsEnum(UserType, { message: CreateUserMessages.common.string })
  public type: UserType;
}
