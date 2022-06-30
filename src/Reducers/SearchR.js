export default (state = [], action) => {
  switch (action.type) {
    case "SEARCH_SUCCESS":
      return action.payload;
    default:
      return state;
  }
};
