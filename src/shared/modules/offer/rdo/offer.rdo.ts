import { Expose, Type } from 'class-transformer';
import { UserRdo } from '../../user/index.js';

export class OfferRdo {
  @Expose()
  public title: string;

  @Expose()
  public description: string;

  @Expose()
  public postDate: string;

  @Expose()
  public city: string;

  @Expose()
  public preview: string;

  @Expose()
  public photos: string[];

  @Expose()
  public isPremium: boolean;

  @Expose()
  public isFavorite: boolean;

  @Expose()
  public rating: number;

  @Expose()
  public type: string;

  @Expose()
  public roomsCount: number;

  @Expose()
  public guestsCount: number;

  @Expose()
  public price: number;

  @Expose()
  public amenities: string[];

  @Expose({ name: 'user' })
  @Type(() => UserRdo)
  public user: UserRdo;

  @Expose()
  public latitude: number;

  @Expose()
  public longitude: number;

  @Expose()
  public commentCount: number;
}
