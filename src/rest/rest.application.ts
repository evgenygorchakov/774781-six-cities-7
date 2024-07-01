import { injectable, inject } from 'inversify';
import { Config } from '../shared/libs/config/index.js';
import { RestSchema } from '../shared/libs/config/index.js';
import { Logger } from '../shared/libs/logger/index.js';
import { Component } from '../shared/types/index.js';
import { DatabaseClient } from '../shared/libs/database-client/database-client.interface.js';
import { getMongoURI } from '../shared/helpers/database.js';
// import { DefaultUserService } from '../shared/modules/user/default-user.service.js';
// import { UserModel } from '../shared/modules/user/user.entity.js';
import { DefaultOfferService } from '../shared/modules/offer/default-offer.service.js';
import { OfferModel } from '../shared/modules/offer/offer.entity.js';

@injectable()
export class RestApplication {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.Config) private readonly config: Config<RestSchema>,
    @inject(Component.DatabaseClient) private readonly databaseClient: DatabaseClient
  ) {}

  private async initDb() {
    const mongoUri = getMongoURI(
      this.config.get('DB_USER'),
      this.config.get('DB_PASSWORD'),
      this.config.get('DB_HOST'),
      this.config.get('DB_PORT'),
      this.config.get('DB_NAME'),
    );

    return this.databaseClient.connect(mongoUri);
  }

  public async init() {
    // const userService = new DefaultUserService(this.logger, UserModel);
    const offerService = new DefaultOfferService(this.logger, OfferModel);

    // this.logger.info('Application initialization');
    // this.logger.info(`Get value from env $PORT: ${this.config.get('PORT')}`);

    // this.logger.info('Init database…');
    await this.initDb();
    // this.logger.info('Init database completed');

    // const user = await userService.findByEmail('fish@big.local');
    // console.log('user', user);

    // const offers = await offerService.find(1);
    // console.log('offers', offers);

    const findedOffer = await offerService.findById('66790794b447136cf6255bac');
    console.log('findedOffer', findedOffer);

    // const premiumOffers = await offerService.findPremiumByCity('Cologne');
    // console.log('findPremiumByCity', premiumOffers);

    // const updatedOffer = await offerService.updateById('66790794b447136cf6255bb1', { isPremium: false });
    // console.log(updatedOffer);
  }
}
