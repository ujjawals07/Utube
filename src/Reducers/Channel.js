export default (state = [], action) => {
  switch (action.type) {
    case "CHANNEL_DATA":
      return action.payload;
    default:
      return state;
  }
};
