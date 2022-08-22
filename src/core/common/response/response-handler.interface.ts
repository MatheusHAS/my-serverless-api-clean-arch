export interface IResponseHandler<TBody = any> {
  body?: TBody;
  statusCode: number;
}
