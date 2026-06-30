import {
  SendMessageCommand,
  SendMessageCommandInput,
  SQSClient,
} from "@aws-sdk/client-sqs";

export class LibSqs {
  private client: SQSClient = new SQSClient();

  public async sendMessage(queueUrl: string, messageBody: string) {
    const input: SendMessageCommandInput = {
      MessageBody: messageBody,
      QueueUrl: queueUrl,
    };

    const command = new SendMessageCommand(input);

    return this.client.send(command);
  }
}
