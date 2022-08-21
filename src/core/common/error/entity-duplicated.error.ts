export class EntityDuplicatedError extends Error {
  readonly statusCode = 400;

  constructor(message: string) {
    super(`[Entity Duplicated]: ${message}`);
  }
}
