const subscriptionsChannelReducer = (
  state = {
    loading: true,
    videos: [],
  },
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case "SUBSCRIPTIONS_CHANNEL_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "SUBSCRIPTIONS_CHANNEL_SUCCESS":
      return {
        ...state,
        videos: payload,
        loading: false,
      };
    case "SUBSCRIPTIONS_CHANNEL_FAIL":
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
export default subscriptionsChannelReducer;
