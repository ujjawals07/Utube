export const channelVideosReducer = (
  state = {
    loading: true,
    videos: [],
  },
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case "CHANNEL_VIDEOS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "CHANNEL_VIDEOS_SUCCESS":
      return {
        ...state,
        videos: payload,
        loading: false,
      };
    case "CHANNEL_VIDEOS_FAIL":
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
