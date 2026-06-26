import { /*SQSEvent,*/ APIGatewayProxyEvent } from "aws-lambda";
import { Appointment } from "../../packages/interfaces";

export const create = async (event: /*SQSEvent |*/ APIGatewayProxyEvent) => {
  const body = JSON.parse(event.body || "{}") as Appointment;

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Appointment created successfully",
      input: {
        slotId: body.slotId,
        patientId: body.patientId,
        countryIso: body.countryIso,
      },
    }),
  };

  /* console.log(`Event received: ${JSON.stringify(event)}`);

  let body: any;
  let type: string;

  if (event && "body" in event) {
    body = event.body;
    type = "APIGatewayProxyEvent";
  } else {
    body = event.Records.map((record) => record.body);
    type = "SQSEVent";
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Appointment created successfully",
      input: body,
      type: type,
    }),
  }; */
};
