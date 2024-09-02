import {
  IsMongoId,
  IsNumber,
  IsString,
  Max,
  Length,
  Min,
} from 'class-validator';

import { CreateCommentValidationMessage } from './create-comment.messages.js';

export class CreateCommentDto {
  @IsString({ message: CreateCommentValidationMessage.common.string })
  @Length(5, 1024, { message: CreateCommentValidationMessage.text.length})
  public text: string;

  @IsNumber({}, { message: CreateCommentValidationMessage.common.number })
  @Min(1, { message: CreateCommentValidationMessage.rating.min })
  @Max(5, { message: CreateCommentValidationMessage.rating.max })
  public rating: number;

  @IsMongoId()
  public offerId: string;

  @IsMongoId({ message: CreateCommentValidationMessage.common.id })
  public userId: string;
}
