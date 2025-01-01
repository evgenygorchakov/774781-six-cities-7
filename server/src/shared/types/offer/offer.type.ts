import { User } from '../user/index.js';
import { Amenity } from './amenities.js';
import { City } from './cities.js';
import { Coordinates } from './coordinates.type.js';
import { Photos } from './photos.type.js';
import { PropertyType } from './property-type.js';

export type Offer = {
  title: string,
  description: string,
  postDate: Date,
  city: City,
  preview: string,
  photos: Photos,
  isPremium: boolean,
  isFavorite: boolean,
  rating: number,
  type: PropertyType,
  roomsCount: number,
  guestsCount: number,
  price: number,
  amenities: Amenity[],
  user: User,
  coordinates: Coordinates,
}
