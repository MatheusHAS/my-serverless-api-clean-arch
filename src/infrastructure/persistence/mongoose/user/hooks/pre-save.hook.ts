import { CallbackWithoutResultAndOptionalError } from 'mongoose';
import { BcryptEncryptDataAdapter } from '@/infrastructure/adapter/bcrypt-encrypt-data.adapter';
import { IUserDocument } from '../user.mongoose.entity';

const bcryptEncryptDataAdapter = new BcryptEncryptDataAdapter();

function PreSaveHook(this: IUserDocument, next: CallbackWithoutResultAndOptionalError) {
  if (this.isModified('password')) {
    this.password = bcryptEncryptDataAdapter.execute(this.password);
  }
  next();
}

export { PreSaveHook };
