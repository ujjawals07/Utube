import YouTubeApi from "../Apis/YouTubeApi";
import auth from "../firebase";
import firebase from "firebase/compat/app";
import { utube } from "../Apis/YouTubeApi";
import { useEffect } from "react";




/*export const Login = (token) => async (dispatch) => {
  try {
    dispatch({
      type: "LOGIN_REQUEST",
    });

    // const Google = (
    //   <GoogleLogin
    //     clientId={
    //       "444938917597-e2f4of6pm1v35g9fo9rms3u89n7ukfe6.apps.googleusercontent.com"
    //     }
    //     buttonText="Login"
    //     cookiePolicy={"single_host_origin"}
    //   ></GoogleLogin>
    // );
    console.log(token);

    // sessionStorage.setItem("ytc-access-token", accessToken);
    // sessionStorage.setItem("ytc-user", JSON.stringify(Profile));
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: token,
    });
    dispatch({
      type: "LOAD_PROFILE",
      //  payload: Profile,
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const Logout = () => async (dispatch) => {
  await auth.signOut();
  dispatch({
    type: "LOG_OUT",
  });
  sessionStorage.removeItem("ytc-accesss-token");
  sessionStorage.removeItem("ytc-user");
};*/
export const fetchdata = () => async (dispatch) => {
  const response = await YouTubeApi("/videos", {
    params: {
      part: "snippet,contentDetails,statistics",
      chart: "mostPopular",
      type: "video",
      regionCode: "IN",
      maxResults: 20,
      pageToken: "",
    },
  });
  console.log(response);
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data.items,
  });
};

export const Detailsdata = (id) => async (dispatch) => {
  const { data } = await YouTubeApi("/videos", {
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
  const { data } = await YouTubeApi("/channels", {
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
  try {
    console.log(getState().auth, "land");
    const { data } = await YouTubeApi.get("/subscriptions", {
      params: {
        part: "snippet",
        forChannelId: id,
        mine: true,
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });
    dispatch({
      type: "SUBSCRIPTION_DATA",
      payload: data.items.length !== 0,
    });
    console.log(data);
  } catch (error) {
    console.log(error.response.data);
  }
};

export const GetComments = (id) => async (dispatch) => {
  const res = await YouTubeApi("/commentThreads", {
    params: {
      part: "snippet",
      videoId: id,
    },
  });
  dispatch({
    type: "COMMENT_LIST_SUCCESS",
    payload: res.data.items,
  });
};

export const SearchVideos = (q) => async (dispatch) => {
  const res = await YouTubeApi("/search", {
    params: {
      part: "snippet",
      maxResults: 25,
      q: q,
      type: "video,channel",
    },
  });

  dispatch({
    type: "SEARCH_SUCCESS",
    payload: res.data,
  });
};

export const SuggestVideos = (id) => async (dispatch) => {
  const res = await YouTubeApi("/search", {
    params: {
      part: "snippet",
      maxResults: 15,
      type: "video",
      relatedToVideoId: id,
    },
  });
  console.log(res);
  dispatch({
    type: "SUGGEST_SUCCESS",
    payload: res.data,
  });
};
