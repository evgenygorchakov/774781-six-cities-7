import { Container } from 'inversify';
import { CommentService } from './comment-service.interface.js';
import { Component } from '../../types/component.enum.js';
import { types } from '@typegoose/typegoose';
import { CommentEntity, CommentModel } from './comment.entity.js';
import { DefaultCommentService } from './index.js';

export function createCommentContainer() {
  const commentContainer = new Container;

  commentContainer.bind<CommentService>(Component.CommentService)
    .to(DefaultCommentService)
    .inSingletonScope();

  commentContainer.bind<types.ModelType<CommentEntity>>(Component.CommentModel)
    .toConstantValue(CommentModel);

  return commentContainer;
}
