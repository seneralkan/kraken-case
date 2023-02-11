import { KrakenException } from '../../../common/exceptions/exception';
import { HttpStatus } from '@nestjs/common';
import { ERROR_MESSAGES } from '../../../common/constants';

export class SiteInfoNotFound extends KrakenException {
  constructor() {
    super(
      'Site does not exist.',
      ERROR_MESSAGES.VALIDATION.code,
      HttpStatus.NOT_FOUND,
    );
  }
}
