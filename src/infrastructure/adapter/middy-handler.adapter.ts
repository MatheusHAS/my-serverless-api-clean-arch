import { IMakeHandlerAdapter } from '@/core/common/adapter/make-handler-adapter.interface';
import middy, { MiddyfiedHandler } from '@middy/core';
import httpErrorMiddleware from '@middy/http-error-handler';
import { MongooseDatabaseMiddleware } from '../persistence/mongoose/mongoose-database-middleware';

const ErrorHandler = () => {
  return {
    onError: (event: ErrorEvent) => {
      const { error } = event;
      if (error && error.errorJSON) {
        return error.errorJSON;
      }
    }
  };
};

export class MiddyHandlerAdapter implements IMakeHandlerAdapter<any, MiddyfiedHandler> {
  execute(handler: any, middlewares: any[] = []): MiddyfiedHandler {
    return middy(handler).use([ErrorHandler(), httpErrorMiddleware(), MongooseDatabaseMiddleware(), ...middlewares]);
  }
}
