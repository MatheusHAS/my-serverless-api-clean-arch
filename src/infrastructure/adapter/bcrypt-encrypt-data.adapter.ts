import { hashSync, genSaltSync } from 'bcrypt';
import { IEncryptDataAdapter } from '@/core/common/adapter/encrypt-data-adapter.interface';

const DEFAULT_SALT_ROUNDS = 10;

export class BcryptEncryptDataAdapter implements IEncryptDataAdapter {
  execute(data: string) {
    const salt: string = genSaltSync(DEFAULT_SALT_ROUNDS);
    const encryptedData = hashSync(data, salt);

    return encryptedData;
  }
}
