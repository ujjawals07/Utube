import React from "react";
import Videos from "../components/Videos";
import Nav from "../components/NavBar";
import VideDetails from "../components/VideoDetails";
import Comments from "../components/Comments";
import SuggestVideo from "../components/SuggestVideo";
import { useParams } from "react-router-dom";
const VideoPlayer = () => {
  const { id } = useParams();
  return (
    <div className="videoplayer">
      <div className="videoplayertv">
        <div class="videoplayertv-iframe">
          <iframe
            className="iframetv"
            width="500"
            height="300"
            title="ujjawal"
            src={`https://www.youtube.com/embed/${id}`}
          ></iframe>
        </div>
        <VideDetails />
        <Comments />
      </div>
      <SuggestVideo />
    </div>
  );
};

export default VideoPlayer;
/*    <div className="u">
      <h2>ujjawal</h2>
      <iframe
        width="420"
        height="315"
        title="ujjawal"
        src={`https://www.youtube.com/embed/${id}`}
      ></iframe>
    </div>*/
