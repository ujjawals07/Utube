export default (state = [], action) => {
  switch (action.type) {
    case "SUGGEST_SUCCESS":
      return action.payload;
    default:
      return state;
  }
};
