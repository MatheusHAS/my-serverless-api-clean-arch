import { IResponseHandler } from '../response/response-handler.interface';

export class CommonError extends Error {
  public readonly statusCode: number;
  public readonly errorBody: any;
  public readonly errorJSON: IResponseHandler;

  constructor(statusCode: number, details?: any[] | null, message?: string) {
    super(message);
    this.statusCode = statusCode;
    this.errorBody = {
      success: false,
      message,
      details: details?.filter((detail) => !!detail),
      stack: process.env.DEBUG ? this.stack : undefined
    };
    this.errorJSON = {
      statusCode: this.statusCode,
      body: JSON.stringify(this.errorBody)
    };
  }
}
