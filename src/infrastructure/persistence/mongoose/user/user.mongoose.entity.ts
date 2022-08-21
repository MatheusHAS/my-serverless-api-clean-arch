import { Document, Model, model } from 'mongoose';
import { IUserEntity } from '@/core/domain/user/user-entity.interface';
import { UserSchema } from './user-mongoose.schema';

export interface IUserDocument extends IUserEntity, Document<string> {}
export interface IUserModel extends Model<IUserDocument> {}

export default model<IUserDocument, IUserModel>('user', UserSchema);
