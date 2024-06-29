import {
  Amenities,
  City,
  Coordinates,
  Photos,
  PropertyType,
} from '../../../types/index.js';

export class UpdateOfferDto {
  public title?: string;
  public description?: string;
  public postDate?: Date;
  public city?: City;
  public preview?: string;
  public photos?: Photos;
  public isPremium?: boolean;
  public isFavorite?: boolean;
  public rating?: number;
  public type?: PropertyType;
  public roomsCount?: number;
  public guestsCount?: number;
  public price?: number;
  public amenities?: Amenities[];
  public latitude?: Coordinates['latitude'];
  public longitude?: Coordinates['longitude'];
}
