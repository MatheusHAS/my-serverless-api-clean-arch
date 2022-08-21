export abstract class IEncryptDataAdapter<TInput = string, TOutput = any> {
  abstract execute(data: TInput): TOutput;
}
