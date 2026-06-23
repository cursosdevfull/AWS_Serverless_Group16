exports.greeting = (event) => {
  console.log("Event: ", event);

  return { message: "Greeting from the serverless function!" };
};
