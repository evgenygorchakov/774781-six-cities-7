import { Container } from 'inversify';
import { types } from '@typegoose/typegoose';

import { Component } from '../../types/index.js';
import { Controller } from '../../libs/rest/index.js';
import { DefaultOfferService } from './default-offer.service.js';
import { OfferService } from './offer-service.interface.js';
import { OfferEntity, OfferModel } from './offer.entity.js';
import { OfferController } from './offer.controller.js';

export function createOfferContainer() {
  const offerContainer = new Container();

  offerContainer
    .bind<OfferService>(Component.OfferService)
    .to(DefaultOfferService)
    .inSingletonScope();

  offerContainer
    .bind<types.ModelType<OfferEntity>>(Component.OfferModel)
    .toConstantValue(OfferModel);

  offerContainer
    .bind<Controller>(Component.OfferController)
    .to(OfferController)
    .inSingletonScope();

  return offerContainer;
}