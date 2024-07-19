import { Expose } from 'class-transformer';

export class UserRdo {
  @Expose()
  public firstName: string;

  @Expose()
  public email: string;

  @Expose()
  public avatarPath: string;
}
