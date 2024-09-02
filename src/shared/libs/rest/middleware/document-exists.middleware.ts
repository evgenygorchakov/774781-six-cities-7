import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { DocumentExists } from '../../../types/index.js';
import { Middleware } from './middleware.interface.js';
import { HttpError } from '../errors/http-error.js';

export class DocumentExistMiddleware implements Middleware {
  constructor(
    private readonly service: DocumentExists,
    private readonly entityName: string,
    private readonly paramName: string
  ) {}

  public async execute(
    { params }: Request,
    _res: Response,
    next: NextFunction
  ) {
    const documentId = params[this.paramName];

    if (!(await this.service.exists(documentId))) {
      throw new HttpError(
        StatusCodes.NOT_FOUND,
        `${this.entityName} with ${documentId} not found.`,
        'DocumentExistsMiddleware'
      );
    }

    next();
  }
}
