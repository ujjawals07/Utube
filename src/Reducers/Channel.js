export default (state = { status: false }, action) => {
  switch (action.type) {
    case "CHANNEL_DATA":
      return action.payload;

    case "SUBSCRIPTION_DATA":
      return action.payload;

    default:
      return state;
  }
};
