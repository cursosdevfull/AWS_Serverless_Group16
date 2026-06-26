export interface SQSEVent {
  Records: Record[];
}

interface Record {
  messageId: string;
  receiptHandle: string;
  body: string;
  attributes: Attributes;
  messageAttributes: MessageAttributes;
  md5OfBody: string;
  eventSource: string;
  eventSourceARN: string;
  awsRegion: string;
}

interface Attributes {
  ApproximateReceiveCount: string;
  SentTimestamp: string;
  SenderId: string;
  ApproximateFirstReceiveTimestamp: string;
}

interface MessageAttributes {}
