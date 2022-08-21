import { APIGatewayEvent, Context } from 'aws-lambda';
import { MiddyHandlerAdapter } from '@/infrastructure/adapter/middy-handler.adapter';
import { UserMongooseRepository } from '@/infrastructure/persistence/mongoose/user/user-mongoose.repository';
import { UserController } from '../controller/user.controller';

const handlerAdapter = new MiddyHandlerAdapter();

const userRepository = new UserMongooseRepository();
const userController = new UserController(userRepository);

export const register = handlerAdapter.execute((event: APIGatewayEvent, context: Context) =>
  userController.create(event, context)
);
