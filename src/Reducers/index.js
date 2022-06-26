import { combineReducers } from "redux";
import VideoReducer from "./VideoReducer";
import Details from "./Details";

export default combineReducers({
  post: VideoReducer,
  description: Details,
});
