import { CommonError } from './common.error';

export class InvalidDataError extends CommonError {
  constructor(message?: any, details?: string[]) {
    super(400, details, message);
  }
}
