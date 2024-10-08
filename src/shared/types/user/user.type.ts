import { UserType } from './user-type.enum.js';

export type User = {
  firstName: string,
  email: string,
  avatarPath?: string,
  password: string,
  type: UserType,
}
