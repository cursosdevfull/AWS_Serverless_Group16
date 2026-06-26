export const create = async (event: any) => {
  const body = JSON.parse(event.body || "{}");

  console.log("Received event MX:", JSON.stringify(event, null, 2));
};
