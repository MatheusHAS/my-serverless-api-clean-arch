import { Context, APIGatewayEvent } from 'aws-lambda';
import { UserRepository } from '@/core/domain/user/user.repository';
import { CoreApiResponse } from '@/core/common/core-api-response';

export class UserController {
  constructor(private readonly repository: UserRepository) {}

  async create(event: APIGatewayEvent, context: Context) {
    const requestBody = JSON.parse(event.body as string);

    const repositoryData = await this.repository.create(requestBody);

    return CoreApiResponse.success(201, { repositoryData });
  }
}
