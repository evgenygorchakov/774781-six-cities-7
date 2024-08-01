import dayjs from 'dayjs';

import { OfferGenerator } from './offer-generator.interface.js';
import { MockServerData } from '../../types/mock-server-data.type.js';
import {
  generateRandomValue,
  getRandomItem,
  getRandomItems,
} from '../../helpers/index.js';

import { City, CoordinatesCities } from '../../types/index.js';

const MIN_PRICE = 100;
const MAX_PRICE = 100000;

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;

const MIN_RATING = 1;
const MAX_RATING = 5;

const MIN_ROOMS_COUNT = 1;
const MAX_ROOMS_COUNT = 8;

const MIN_GUESTS_COUNT = 1;
const MAX_GUESTS_COUNT = 10;

export class TSVOfferGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockServerData) {}

  public generate(): string {
    const title = getRandomItem(this.mockData.titles);
    const description = getRandomItem(this.mockData.descriptions);
    const postDate = dayjs()
      .subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day')
      .toISOString();

    const city = getRandomItem(this.mockData.cities) as City;
    const preview = 'preview.jpg';
    const photos = this.mockData.photos.join(';');
    const isPremium = generateRandomValue(0, 1);
    const isFavorite = generateRandomValue(0, 1);
    const rating = generateRandomValue(MIN_RATING, MAX_RATING);
    const type = getRandomItem(this.mockData.types);
    const roomsCount = generateRandomValue(MIN_ROOMS_COUNT, MAX_ROOMS_COUNT);
    const guestsCount = generateRandomValue(MIN_GUESTS_COUNT, MAX_GUESTS_COUNT);
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE);
    const amenities = getRandomItems(this.mockData.amenities).join(';');
    const firstName = getRandomItem(this.mockData.names);
    const email = getRandomItem(this.mockData.emails);
    const avatar = getRandomItem(this.mockData.avatars);
    const password = getRandomItem(this.mockData.passwords);
    const userType = getRandomItem(this.mockData.userTypes);
    const latitude = CoordinatesCities[city].latitude;
    const longitude = CoordinatesCities[city].longitude;

    return [
      title,
      description,
      postDate,
      city,
      preview,
      photos,
      isPremium,
      isFavorite,
      rating,
      type,
      roomsCount,
      guestsCount,
      price,
      amenities,
      firstName,
      email,
      avatar,
      password,
      userType,
      latitude,
      longitude,
    ].join('\t');
  }
}
