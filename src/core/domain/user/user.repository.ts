import { EntityDuplicatedError } from '@/core/common/error/entity-already-exist.error';
import { IRepository } from '@/core/common/repository.interface';
import { IUserEntity } from './user-entity.interface';

export abstract class UserRepository implements IRepository {
  async create(user: IUserEntity): Promise<void> {
    const alreadyExistEmail = await this.findUserByEmail(user.email);
    if (alreadyExistEmail) {
      throw new EntityDuplicatedError(`User with "${user.email}" already exist on database.`);
    }
    await this.insert(user);
  }

  abstract insert(user: IUserEntity): Promise<void>;
  abstract update(user: IUserEntity): Promise<void>;

  abstract findUserByEmail(email: string): Promise<IUserEntity | null>;
}
