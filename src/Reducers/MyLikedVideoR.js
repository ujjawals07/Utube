export default (state = [], action) => {
    switch (action.type) {
      case "MYLIKEDVIDEO_SUCCESS":
        return action.payload;
      default:
        return state;
    }
  };