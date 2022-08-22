import { Schema } from 'mongoose';
import { PreSaveHook } from './hooks/pre-save.hook';
import { IUserDocument } from './user.mongoose.entity';

const UserSchema = new Schema({
  email: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
  }
}).pre<IUserDocument>('save', PreSaveHook);

export { UserSchema };
