import { APIGatewayProxyEvent } from "aws-lambda";
import { Appointment } from "../../packages/interfaces";
import { InvokeCommandInput, LambdaClient } from "@aws-sdk/client-lambda";

const client = new LambdaClient();

export const create = async (event: APIGatewayProxyEvent) => {
  const body = JSON.parse(event.body || "{}") as Appointment;

  const functionName =
    process.env["LAMBDA_NAME_" + body.countryIso.toUpperCase()] || "";

  const input: InvokeCommandInput = {
    InvocationType: "RequestResponse",
    Payload: JSON.stringify(body),
    FunctionName: functionName,
  };

  console.log(
    "Invoking function:",
    functionName,
    "with payload:",
    JSON.stringify(body),
  );
  console.log("Input for Lambda invocation:", JSON.stringify(input, null, 2));

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
};
