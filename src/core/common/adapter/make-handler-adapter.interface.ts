export abstract class IMakeHandlerAdapter<TInput = any, TResponse = any> {
  abstract execute(handler: TInput, middlewares: any[]): TResponse;
}
