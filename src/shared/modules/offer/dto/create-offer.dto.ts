import {
  Amenities,
  City,
  Coordinates,
  Photos,
  PropertyType,
} from '../../../types/index.js';

export class CreateOfferDto {
  public title: string;
  public description: string;
  public postDate: Date;
  public city: City;
  public preview: string;
  public photos: Photos;
  public isPremium: boolean;
  public isFavorite: boolean;
  public rating: number;
  public type: PropertyType;
  public roomsCount: number;
  public guestsCount: number;
  public price: number;
  public amenities: Amenities[];
  public userId: string;
  public latitude: Coordinates['latitude'];
  public longitude: Coordinates['longitude'];
}
