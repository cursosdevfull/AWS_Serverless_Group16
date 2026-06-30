import {
  InvokeCommand,
  InvokeCommandInput,
  LambdaClient,
} from "@aws-sdk/client-lambda";

export enum LambdaInvocationType {
  RequestResponse = "RequestResponse",
  Event = "Event",
  DryRun = "DryRun",
}

export class LibLambda {
  private client: LambdaClient = new LambdaClient();

  public async invokeLambda(
    functionName: string,
    payload: any,
    invocationType: LambdaInvocationType = LambdaInvocationType.RequestResponse,
  ) {
    const input: InvokeCommandInput = {
      InvocationType: invocationType,
      FunctionName: functionName,
      Payload: JSON.stringify(payload),
    };
    const command = new InvokeCommand(input);
    return this.client.send(command);
  }
}
