import YouTubeApi from "../Apis/YouTubeApi";
import auth from "../firebase";
import firebase from "firebase/compat/app";

export const Login = () => async (dispatch) => {
  const providr = new firebase.auth.GoogleAuthProvider();
 const res = await auth.signInWithPopup(providr)
 console.log(res);
};

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

export const Channeldata = (id) => async (dispatch) => {
  const { data } = await YouTubeApi.get("/channels", {
    params: {
      part: "snippet,statistics,contentDetails",
      id,
    },
  });
  dispatch({
    type: "CHANNEL_DATA",
    payload: data.items[0],
  });
};

export const Subscription = (id) => async (dispatch, getState) => {
  const { data } = await YouTubeApi.get("/subscriptions", {
    params: {
      part: "snippet,statistics,contentDetails",
      id,
    },
  });
  dispatch({
    type: "SUBSCRIPTION_DATA",
    payload: data.items[0],
  });
};
