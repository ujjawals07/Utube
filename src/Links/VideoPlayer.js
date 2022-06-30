import React, { useEffect } from "react";
import Videos from "../components/Videos";
import Nav from "../components/NavBar";
import VideDetails from "../components/VideoDetails";
import Comments from "../components/Comments";
import SuggestVideo from "../components/SuggestVideo";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Detailsdata } from "../Actions";
import { connect } from "react-redux";
const VideoPlayer = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Detailsdata(id));
  }, [dispatch, id]);

  const video = useSelector((state) => state.description);
  console.log(video?.snippet?.title);
  return (
    <React.Fragment>
      <div className="videoplayer">
        <div className="videoplayertv">
          <div class="videoplayertv-iframe">
            <iframe
              className="iframetv"
              width="500"
              height="300"
              title="my"
              src={`https://www.youtube.com/embed/${id}`}
            ></iframe>
          </div>
          <VideDetails video={video} />
          <Comments videoid={id} />
        </div>
      </div>
      <SuggestVideo />
    </React.Fragment>
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
