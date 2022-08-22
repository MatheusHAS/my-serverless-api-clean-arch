import { CommonError } from './common.error';

export class EntityDuplicatedError extends CommonError {
  constructor(message: string) {
    super(400, null, `[Entity Duplicated]: ${message}`);
  }
}
