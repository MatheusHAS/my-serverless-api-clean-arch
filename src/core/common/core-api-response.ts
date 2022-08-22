import { IResponseHandler } from './response/response-handler.interface';

export class CoreApiResponse {
  public readonly statusCode: number;
  public readonly body: any;
  public readonly success: boolean;

  private constructor(statusCode: number, body: any, success: boolean) {
    this.statusCode = statusCode;
    this.body = body;
    this.success = success;
  }

  public static success(statusCode: number, body: any): IResponseHandler {
    return new CoreApiResponse(statusCode, body, true).getJsonResponse();
  }

  public static error(statusCode: number, message: any): IResponseHandler {
    return new CoreApiResponse(statusCode, { message }, false).getJsonResponse();
  }

  private getJsonResponse(): IResponseHandler {
    return {
      statusCode: this.statusCode,
      body: {
        success: this.success,
        content: this.body
      }
    };
  }
}
