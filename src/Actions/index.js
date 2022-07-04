import YouTubeApi from "../Apis/YouTubeApi";
import axios from "axios";
import auth from "../firebase";
import firebase from "firebase/compat/app";
import { utube } from "../Apis/YouTubeApi";
import { useEffect } from "react";

// export const signin = (userid) => {
//   return {
//     type: "SIGN_IN",
//     payload: userid,
//   };
// };

// export const signOut = () => {
//   return {
//     type: "SIGN_OUT",
//   };
// };

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
    const body = {
      snippet: {
        resourceId: id,
      },
    };
    const { data } = await axios.post(
      "https://www.googleapis.com/youtube/v3/subscriptions",
      body,
      {
        params: {
          part: "snippet",
          forChannelId: id,
          mine: true,
          key: "AIzaSyD7f02AKj9i1ZbOKoMP68cd7CNBzhveTp8",
          access_token:
            window.gapi.auth2.getAuthInstance().currentUser.yb.Cc.access_token,
        },
      }
    );
    console.log(data);

    dispatch({
      type: "SUBSCRIPTION_DATA",
      payload: data.items.length !== 0,
    });
  } catch (error) {
    console.log(error.response.data);
  }
};
export const LikeVideo = (id) => async (dispatch, getState) => {
  try {
    const res = await axios.post(
      "https://www.googleapis.com/youtube/v3/videos/rate",
      null,
      {
        params: {
          part: "snippet",
          id: id,
          rating: "like",
          key: "AIzaSyD7f02AKj9i1ZbOKoMP68cd7CNBzhveTp8",
          access_token:
            window.gapi.auth2.getAuthInstance().currentUser.yb.Cc.access_token,
        },
      }
    );
    if (res.status !== 204) {
      dispatch({
        type: "LIKE_DATA",
      });
    } else {
      console.log("alredy liked");
    }
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

export const MyComments = (id, text) => async (dispatch, getState) => {
  try {
    const obj = {
      snippet: {
        videoId: id,
        topLevelComment: {
          snippet: {
            textOriginal: text,
          },
        },
      },
    };

    await axios.post(
      "https://www.googleapis.com/youtube/v3/commentThreads",
      obj,

      {
        params: {
          part: "snippet",
          key: "AIzaSyD7f02AKj9i1ZbOKoMP68cd7CNBzhveTp8",
          access_token:
            window.gapi.auth2.getAuthInstance().currentUser.yb.Cc.access_token,
        },
      }
    );

    dispatch({
      type: "MYCOMMENTS_SUCCESS",
    });

    setTimeout(() => dispatch(GetComments(id)), 3000);
  } catch (error) {
    console.log(error.response.data);
  }
};

export const MySubscription = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: "SUBSCRIPTIONS_CHANNEL_REQUEST",
    });
    const res = await axios.get(
      "https://www.googleapis.com/youtube/v3/subscriptions",

      {
        params: {
          part: "snippet,contentDetails",
          mine: true,
          key: "AIzaSyD7f02AKj9i1ZbOKoMP68cd7CNBzhveTp8",
          access_token:
            window.gapi.auth2.getAuthInstance().currentUser.yb.Cc.access_token,
        },
      }
    );
    dispatch({
      type: "SUBSCRIPTIONS_CHANNEL_SUCCESS",
      payload: res.data.items,
    });
    console.log(res);
  } catch (error) {
    console.log(error);
    dispatch({
      type: "SUBSCRIPTIONS_CHANNEL_FAIL",
      payload: error.res,
    });
  }
};
export const getVideosByChannel = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "CHANNEL_VIDEOS_REQUEST",
    });

    // 1. get upload playlist id
    const {
      data: { items },
    } = await YouTubeApi("/channels", {
      params: {
        part: "contentDetails",
        id: id,
      },
    });
    console.log(items);
    const uploadPlaylistId = items[0].contentDetails.relatedPlaylists.uploads;
    // 2. get the videos using the id
    const { data } = await YouTubeApi("/playlistItems", {
      params: {
        part: "snippet,contentDetails",
        playlistId: uploadPlaylistId,
        maxResults: 30,
      },
    });

    dispatch({
      type: "CHANNEL_VIDEOS_SUCCESS",
      payload: data.items,
    });
  } catch (error) {
    console.log(error.response.data.message);
    dispatch({
      type: "CHANNEL_DETAILS_FAIL",
      payload: error.response.data,
    });
  }
};
