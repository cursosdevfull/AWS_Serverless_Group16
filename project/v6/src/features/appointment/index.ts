import { APIGatewayProxyEvent } from "aws-lambda";
import { Appointment } from "../../packages/interfaces";
import { LibSNS } from "../../../lib";

export const create = async (event: APIGatewayProxyEvent) => {
  const body = JSON.parse(event.body || "{}") as Appointment;

  const topicArn = process.env["TOPIC_ARN"] || "";

  const libSns = new LibSNS();
  const response = await libSns.publish(topicArn, body);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Appointment created successfully",
      input: {
        slotId: body.slotId,
        patientId: body.patientId,
        countryISO: body.countryISO,
        response,
      },
    }),
  };
};
