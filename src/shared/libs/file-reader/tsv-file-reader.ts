import EventEmitter from 'node:events';
import { createReadStream } from 'node:fs';

import { FileReader } from './file-reader.interface.js';
import {
  User,
  Amenities,
  City,
  Offer,
  Photos,
  PropertyType,
  Coordinates,
  UserType
} from '../../types/index.js';

export class TSVFileReader extends EventEmitter implements FileReader {
  private CHUNK_SIZE = 16384; // 16KB

  constructor(
    private readonly filename: string
  ) {
    super();
  }

  private parseLineToOffer(line: string): Offer {
    const [
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
      name,
      email,
      avatarPath,
      password,
      userType,
      latitude,
      longitude,
    ] = line.split('\t');

    return {
      title,
      description,
      postDate: new Date(postDate),
      city: city as City,
      preview,
      photos: photos.split(';') as Photos,
      isPremium: Boolean(Number.parseInt(isPremium, 10)),
      isFavorite: Boolean(Number.parseInt(isFavorite, 10)),
      rating: Number.parseInt(rating, 10),
      type: type as PropertyType,
      roomsCount: Number.parseInt(roomsCount, 10),
      guestsCount: Number.parseInt(guestsCount, 10),
      price: Number.parseInt(price, 10),
      amenities: amenities.split(';') as Amenities[],
      user: this.parseUser(name, email, avatarPath, password, userType) as User,
      coordinates: this.parseCoordinates(latitude, longitude) as Coordinates,
    };
  }

  private parseUser(
    firstName: string,
    email: string,
    avatarPath: string,
    password: string,
    userType: string
  ): User {
    return { firstName, email, avatarPath, password, type: userType as UserType };
  }

  private parseCoordinates(latitude: string, longitude: string) {
    return {
      latitude: Number.parseFloat(latitude),
      longitude: Number.parseFloat(longitude)
    };
  }

  public async read(): Promise<void> {
    const readStream = createReadStream(this.filename, {
      highWaterMark: this.CHUNK_SIZE,
      encoding: 'utf-8',
    });

    let remainingData = '';
    let nextLinePosition = -1;
    let importedRowCount = 0;

    for await (const chunk of readStream) {
      remainingData += chunk.toString();

      while ((nextLinePosition = remainingData.indexOf('\n')) >= 0) {
        const completeRow = remainingData.slice(0, nextLinePosition + 1);
        remainingData = remainingData.slice(++nextLinePosition);
        importedRowCount += 1;

        const parserOffer = this.parseLineToOffer(completeRow);

        await new Promise((resolve) => {
          this.emit('line', parserOffer, resolve);
        });
      }
    }

    this.emit('end', importedRowCount);
  }
}
