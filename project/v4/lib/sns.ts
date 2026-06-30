import {
  PublishCommand,
  PublishCommandInput,
  SNSClient,
} from "@aws-sdk/client-sns";

export class LibSNS {
  private client: SNSClient = new SNSClient();

  public publish(topicArn: string, message: Record<string, any>) {
    const input: PublishCommandInput = {
      Message: JSON.stringify(message),
      TopicArn: topicArn,
    };

    const command = new PublishCommand(input);
    return this.client.send(command);
  }
}
