export default (state = [], action) => {
  switch (action.type) {
    case "COMMENT_LIST_SUCCESS":
      return action.payload;
 
      case "COMMENT_LIST_FAIL":
        return null
    default:
      return state;
  }
};
