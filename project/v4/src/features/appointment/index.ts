import { APIGatewayProxyEvent } from "aws-lambda";
import { Appointment } from "../../packages/interfaces";
import { LibSqs } from "../../../lib";

export const create = async (event: APIGatewayProxyEvent) => {
  const body = JSON.parse(event.body || "{}") as Appointment;

  const urlSqs =
    process.env["SQS_APPOINTMENT_" + body.countryIso.toUpperCase()] || "";

  const libSqs = new LibSqs();
  const response = await libSqs.sendMessage(urlSqs, JSON.stringify(body));

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Appointment created successfully",
      input: {
        slotId: body.slotId,
        patientId: body.patientId,
        countryIso: body.countryIso,
        response,
      },
    }),
  };
};
