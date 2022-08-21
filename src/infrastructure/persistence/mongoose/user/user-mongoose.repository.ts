import { UserRepository } from '@/core/domain/user/user.repository';
import { IUserEntity } from '@/core/domain/user/user-entity.interface';
import UserEntity, { IUserModel } from './user.mongoose.entity';

export class UserMongooseRepository extends UserRepository {
  private readonly userEntity: IUserModel;

  constructor() {
    super();
    this.userEntity = UserEntity;
  }

  async insert(user: IUserEntity): Promise<void> {
    await this.userEntity.create(user);
  }
  async update({ _id, ...user }: IUserEntity) {
    await this.userEntity.updateOne({ _id }, user);
  }

  async findUserByEmail(email: string): Promise<IUserEntity | null> {
    return this.userEntity.findOne({
      email
    });
  }
}
