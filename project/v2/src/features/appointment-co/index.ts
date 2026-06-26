export const create = async (event: any) => {
  const body = JSON.parse(event.body || "{}");

  console.log("Received event CO:", JSON.stringify(event, null, 2));
};
