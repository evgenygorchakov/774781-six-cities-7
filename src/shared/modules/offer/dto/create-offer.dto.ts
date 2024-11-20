import {
  Min,
  MinLength,
  Max,
  MaxLength,
  IsDateString,
  IsBoolean,
  IsInt,
  IsNumber,
  IsIn,
  IsString,
  IsArray,
  ArrayMinSize,
  ArrayMaxSize,
  ArrayNotEmpty,
  IsLatitude,
  IsLongitude,
} from 'class-validator';

import {
  Amenity,
  allowedAmenities,
  City,
  allowedCities,
  Photos,
  PropertyType,
  allowedPropertyTypes,
  Coordinates,
} from '../../../types/index.js';

import { CreateOfferValidationMessage } from './create-offer.messages.js';

export class CreateOfferDto {
  @IsString({ message: CreateOfferValidationMessage.common.string })
  @MinLength(10, { message: CreateOfferValidationMessage.title.minLength })
  @MaxLength(100, { message: CreateOfferValidationMessage.title.maxLength })
  public title: string;

  @IsString({ message: CreateOfferValidationMessage.common.string })
  @MinLength(10, { message: CreateOfferValidationMessage.description.minLength })
  @MaxLength(100, { message: CreateOfferValidationMessage.description.maxLength })
  public description: string;

  @IsString({ message: CreateOfferValidationMessage.common.string })
  @IsDateString({}, { message: CreateOfferValidationMessage.postDate.invalidFormat })
  public postDate: Date;

  @IsString({ message: CreateOfferValidationMessage.common.string })
  @IsIn(
    allowedCities,
    { message: CreateOfferValidationMessage.city.invalidFormat }
  )
  public city: City;

  @IsString({ message: CreateOfferValidationMessage.common.string })
  public preview: string;

  @IsArray({ message: CreateOfferValidationMessage.photos.invalidFormat })
  @ArrayMinSize(6, { message: CreateOfferValidationMessage.photos.invalidFormat })
  @ArrayMaxSize(6, { message: CreateOfferValidationMessage.photos.invalidFormat })
  public photos: Photos;

  @IsBoolean({ message: CreateOfferValidationMessage.common.boolean })
  public isPremium: boolean;

  @IsBoolean({ message: CreateOfferValidationMessage.common.boolean })
  public isFavorite: boolean;

  @IsNumber({}, { message: CreateOfferValidationMessage.common.number })
  @Min(1, { message: CreateOfferValidationMessage.rating.min })
  @Max(8, { message: CreateOfferValidationMessage.rating.max })
  public rating: number;

  @IsString({ message: CreateOfferValidationMessage.common.string })
  @IsIn(
    allowedPropertyTypes,
    { message: CreateOfferValidationMessage.type.invalidFormat }
  )
  public type: PropertyType;

  @IsInt({ message: CreateOfferValidationMessage.common.integer })
  @Min(1, { message: CreateOfferValidationMessage.roomsCount.min })
  @Max(8, { message: CreateOfferValidationMessage.roomsCount.max })
  public roomsCount: number;

  @IsInt({ message: CreateOfferValidationMessage.common.integer })
  @Min(1, { message: CreateOfferValidationMessage.guestsCount.min })
  @Max(10, { message: CreateOfferValidationMessage.guestsCount.max })
  public guestsCount: number;

  @IsInt({ message: CreateOfferValidationMessage.common.integer })
  @Min(100, { message: CreateOfferValidationMessage.price.minValue })
  @Max(100000, { message: CreateOfferValidationMessage.price.maxValue })
  public price: number;

  @IsArray({ message: CreateOfferValidationMessage.amenities.invalidFormat })
  @ArrayNotEmpty({ message: CreateOfferValidationMessage.amenities.invalidFormat })
  @IsIn(
    allowedAmenities,
    { each: true, message: CreateOfferValidationMessage.amenities.invalidFormat })
  public amenities: Amenity[];

  public userId: string;

  @IsNumber({}, { message: CreateOfferValidationMessage.common.number })
  @IsLatitude({ message: CreateOfferValidationMessage.latitude.invalidFormat })
  public latitude: Coordinates['latitude'];

  @IsNumber({}, { message: CreateOfferValidationMessage.common.number })
  @IsLongitude({ message: CreateOfferValidationMessage.longitude.invalidFormat })
  public longitude: Coordinates['longitude'];
}
