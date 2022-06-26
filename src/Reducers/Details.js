export default (state = [], action) => {
  switch (action.type) {
    case "DETAIL_POSTS":
      return action.payload;
    default:
      return state;
  }
};
