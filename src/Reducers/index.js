import { combineReducers } from "redux";
import VideoReducer from "./VideoReducer";
import Details from "./Details";
import Channel from "./Channel";
import Comment from "./Comment";
import SearchR from "./SearchR";
import Suggest from "./Suggest";
import Auth from "./Auth";
import subscriptionsChannelReducer from "./MySubscriptionR";
import { channelVideosReducer } from "./SubscribeChannelVideo";
export default combineReducers({
  post: VideoReducer,
  description: Details,
  channel: Channel,
  commentlist: Comment,
  search: SearchR,
  suggest: Suggest,
  auth: Auth,
  mysubscription: subscriptionsChannelReducer,
  channelvideosR: channelVideosReducer,
});
