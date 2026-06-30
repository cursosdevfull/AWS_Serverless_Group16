import { SQSEvent } from "aws-lambda";
import { LibSqs } from "../../../lib";

export const enrichment = async (event: SQSEvent) => {
  const records = event.Records.map((record) => {
    return {
      messageId: record.messageId,
      body: JSON.parse(record.body),
    };
  });

  console.log("Enrichment records:", records);

  const queueUrl = process.env.SQS_URL || "";

  const libSqs = new LibSqs();

  for (const record of records) {
    const messageBody = JSON.stringify({
      ...record.body,
      enriched: true,
      history: ["info 1", "info 2"],
    });
    await libSqs.sendMessage(queueUrl, messageBody);
  }
};
