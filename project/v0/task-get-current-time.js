exports.getCurrentTime = (event) => {
  const currentTime = new Date().toISOString();
  console.log("Event: ", event);
  console.log("Current Time: ", currentTime);

  return { currentTime };
};
