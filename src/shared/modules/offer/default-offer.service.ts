import { inject, injectable } from 'inversify';
import { DocumentType, mongoose, types } from '@typegoose/typegoose';

import { Logger } from '../../libs/logger/index.js';
import { Component, SortType } from '../../types/index.js';
import { OfferEntity } from './offer.entity.js';
import { OfferService } from './offer-service.interface.js';
import { CreateOfferDto } from './dto/create-offer.dto.js';
import { UpdateOfferDto } from './dto/update-offer.dto.js';
import { MAX_OFFER_COUNT, MAX_PREMIUM_OFFERS_COUNT } from './offer.constant.js';

@injectable()
export class DefaultOfferService implements OfferService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.OfferModel) private readonly offerModel: types.ModelType<OfferEntity>
  ) {}

  public async exists(documentId: string): Promise<boolean> {
    const offer = await this.offerModel.exists({ _id: documentId });
    return offer !== null;
  }

  public async find(count: number = MAX_OFFER_COUNT): Promise<DocumentType<OfferEntity>[]> {
    let limit = count;

    if (limit > MAX_OFFER_COUNT) {
      limit = MAX_OFFER_COUNT;
    }

    return this.offerModel
      .aggregate([
        { $sort: { createdAt: SortType.Down } },
        { $limit: limit },
        {
          $lookup: {
            from: 'users',
            localField: 'userId',
            foreignField: '_id',
            as: 'user'
          }
        },
        { $unwind: '$user' },
      ])
      .exec();
  }

  public async findPremiumByCity(city: string): Promise<DocumentType<OfferEntity>[]> {
    return this.offerModel
      .find({ city, isPremium: true })
      .sort({ createdAt: SortType.Down })
      .limit(MAX_PREMIUM_OFFERS_COUNT)
      .populate('userId')
      .exec();
  }

  public async deleteById(offerId: string): Promise<DocumentType<OfferEntity> | null> {
    return this.offerModel
      .findByIdAndDelete(offerId)
      .exec();
  }

  public async updateById(offerId: string, dto: UpdateOfferDto): Promise<DocumentType<OfferEntity> | null> {
    return this.offerModel
      .findByIdAndUpdate(offerId, dto, { new: true })
      .exec();
  }

  public async incCommentCount(offerId: string): Promise<DocumentType<OfferEntity> | null> {
    return this.offerModel
      .findByIdAndUpdate(offerId, { '$inc': {
        commentCount: 1,
      }})
      .exec();
  }

  public async create(dto: CreateOfferDto): Promise<DocumentType<OfferEntity>> {
    const result = await this.offerModel.create(dto);
    this.logger.info(`New offer created: ${dto.title}`);

    return result;
  }

  public async findById(offerId: string): Promise<DocumentType<OfferEntity> | null> {
    const result = await this.offerModel
      .aggregate([
        {
          $match: { _id: new mongoose.Types.ObjectId(offerId) }
        },
        {
          $lookup: {
            from: 'users',
            localField: 'userId',
            foreignField: '_id',
            as: 'user'
          }
        },
        { $unwind: '$user' },
        { $limit: 1 },
      ])
      .exec();

    return result.length > 0 ? result[0] : null;
  }
}
