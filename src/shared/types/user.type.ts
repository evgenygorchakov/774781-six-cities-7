export type UserType = 'common' | 'pro';

export type User = {
  name: string,
  email: string,
  avatarPath?: string,
  password: string,
  type: UserType,
}
