import {
  ArrayMaxSize,
  ArrayMinSize,
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsDateString,
  IsIn,
  IsInt,
  IsLatitude,
  IsLongitude,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

import {
  allowedAmenities,
  allowedCities,
  allowedPropertyTypes,
  Amenity,
  City,
  Coordinates,
  Photos,
  PropertyType,
} from '../../../types/index.js';
import { CreateOfferValidationMessage } from './create-offer.messages.js';

export class UpdateOfferDto {
  @IsOptional()
  @IsString({ message: CreateOfferValidationMessage.common.string })
  @MinLength(10, { message: CreateOfferValidationMessage.title.minLength })
  @MaxLength(100, { message: CreateOfferValidationMessage.title.maxLength })
  public title?: string;

  @IsOptional()
  @IsString({ message: CreateOfferValidationMessage.common.string })
  @MinLength(10, {
    message: CreateOfferValidationMessage.description.minLength,
  })
  @MaxLength(100, {
    message: CreateOfferValidationMessage.description.maxLength,
  })
  public description?: string;

  @IsOptional()
  @IsString({ message: CreateOfferValidationMessage.common.string })
  @IsDateString(
    {},
    { message: CreateOfferValidationMessage.postDate.invalidFormat }
  )
  public postDate?: Date;

  @IsOptional()
  @IsString({ message: CreateOfferValidationMessage.common.string })
  @IsIn(allowedCities, {
    message: CreateOfferValidationMessage.city.invalidFormat,
  })
  public city?: City;

  @IsOptional()
  @IsString({ message: CreateOfferValidationMessage.common.string })
  public preview?: string;

  @IsOptional()
  @IsArray({ message: CreateOfferValidationMessage.photos.invalidFormat })
  @ArrayMinSize(6, {
    message: CreateOfferValidationMessage.photos.invalidFormat,
  })
  @ArrayMaxSize(6, {
    message: CreateOfferValidationMessage.photos.invalidFormat,
  })
  public photos?: Photos;

  @IsOptional()
  @IsBoolean({ message: CreateOfferValidationMessage.common.boolean })
  public isPremium?: boolean;

  @IsOptional()
  @IsBoolean({ message: CreateOfferValidationMessage.common.boolean })
  public isFavorite?: boolean;

  @IsOptional()
  @IsNumber({}, { message: CreateOfferValidationMessage.common.number })
  @Min(1, { message: CreateOfferValidationMessage.rating.min })
  @Max(8, { message: CreateOfferValidationMessage.rating.max })
  public rating?: number;

  @IsOptional()
  @IsString({ message: CreateOfferValidationMessage.common.string })
  @IsIn(allowedPropertyTypes, {
    message: CreateOfferValidationMessage.type.invalidFormat,
  })
  public type?: PropertyType;

  @IsOptional()
  @IsInt({ message: CreateOfferValidationMessage.common.integer })
  @Min(1, { message: CreateOfferValidationMessage.roomsCount.min })
  @Max(8, { message: CreateOfferValidationMessage.roomsCount.max })
  public roomsCount?: number;

  @IsOptional()
  @IsInt({ message: CreateOfferValidationMessage.common.integer })
  @Min(1, { message: CreateOfferValidationMessage.guestsCount.min })
  @Max(10, { message: CreateOfferValidationMessage.guestsCount.max })
  public guestsCount?: number;

  @IsOptional()
  @IsInt({ message: CreateOfferValidationMessage.common.integer })
  @Min(100, { message: CreateOfferValidationMessage.price.minValue })
  @Max(100000, { message: CreateOfferValidationMessage.price.maxValue })
  public price?: number;

  @IsOptional()
  @IsArray({ message: CreateOfferValidationMessage.amenities.invalidFormat })
  @ArrayNotEmpty({
    message: CreateOfferValidationMessage.amenities.invalidFormat,
  })
  @IsIn(allowedAmenities, {
    each: true,
    message: CreateOfferValidationMessage.amenities.invalidFormat,
  })
  public amenities?: Amenity[];

  @IsOptional()
  @IsNumber({}, { message: CreateOfferValidationMessage.common.number })
  @IsLatitude({ message: CreateOfferValidationMessage.latitude.invalidFormat })
  public latitude: Coordinates['latitude'];

  @IsOptional()
  @IsNumber({}, { message: CreateOfferValidationMessage.common.number })
  @IsLongitude({
    message: CreateOfferValidationMessage.longitude.invalidFormat,
  })
  public longitude: Coordinates['longitude'];
}
