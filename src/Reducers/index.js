import { combineReducers } from "redux";
import VideoReducer from "./VideoReducer";
import Details from "./Details";
import Channel from "./Channel";
export default combineReducers({
  post: VideoReducer,
  description: Details,
  channel: Channel,
});
