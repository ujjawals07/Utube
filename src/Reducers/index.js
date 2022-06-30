import { combineReducers } from "redux";
import VideoReducer from "./VideoReducer";
import Details from "./Details";
import Channel from "./Channel";
import { Auth } from "./Auth";
import Comment from "./Comment";
import SearchR from "./SearchR";
export default combineReducers({
  post: VideoReducer,
  description: Details,
  channel: Channel,
  auth: Auth,
  commentlist: Comment,
  search: SearchR,
});
