import YouTubeApi from "../Apis/YouTubeApi";

export const fetchdata = () => async (dispatch) => {
  const response = await YouTubeApi.get("/videos", {
    params: {
      part: "snippet,contentDetails,statistics",
      chart: "mostPopular",
      type: "video",
      regionCode: "IN",
      maxResults: 20,
      pageToken: "",
    },
  });
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data.items,
  });
};

export const Detailsdata = (id) => async (dispatch) => {
  const { data } = await YouTubeApi.get("/videos", {
    params: {
      part: "snippet,statistics",
      id: id,
    },
  });
  dispatch({
    type: "DETAIL_POSTS",
    payload: data.items[0],
  });
};
