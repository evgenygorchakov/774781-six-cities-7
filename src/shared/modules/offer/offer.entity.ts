import {
  Ref,
  defaultClasses,
  getModelForClass,
  modelOptions,
  prop,
} from '@typegoose/typegoose';

import { Amenity, City, Coordinates, Photos, PropertyType } from '../../types/index.js';
import { UserEntity } from '../user/user.entity.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers',
    timestamps: true,
  }
})

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({
    required: true,
    trim: true
  })
  public title: string;

  @prop({ required: true })
  public description: string;

  @prop({ required: true })
  public postDate: Date;

  @prop({ required: true })
  public city: City;

  @prop({ required: true })
  public preview: string;

  @prop({ type: () => [String], required: true })
  public photos: Photos;

  @prop({ default: false })
  public isPremium: boolean;

  @prop({ default: false })
  public isFavorite: boolean;

  @prop({ required: true })
  public rating: number;

  @prop({ required: true })
  public type: PropertyType;

  @prop({ required: true })
  public roomsCount: number;

  @prop({ required: true })
  public guestsCount: number;

  @prop({ required: true })
  public price: number;

  @prop({ type: () => [String], required: true })
  public amenities: Amenity[];

  @prop({
    ref: UserEntity,
    required: true
  })
  public userId: Ref<UserEntity>;

  @prop({ type: () => Number, required: true })
  public latitude: Coordinates['latitude'];

  @prop({ type: () => Number, required: true })
  public longitude: Coordinates['longitude'];

  @prop({ default: 0 })
  public commentCount: number;
}

export const OfferModel = getModelForClass(OfferEntity);
