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
import { SuggestVideos } from "../Actions";
const VideoPlayer = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Detailsdata(id));
    dispatch(SuggestVideos(id));
  }, [dispatch, id]);

  const video = useSelector((state) => state.description);

  const suggest = useSelector((state) => state.suggest.items);

  return (
    <React.Fragment>
      <div className="videoplayer">
        <div className="videoplayertv">
          <div class="videoplayertv-iframe">
            <iframe
              className="iframetv"
              title="my"
              src={`https://www.youtube.com/embed/${id}`}
            ></iframe>
          </div>
          <VideDetails video={video} />
          <Comments videoid={id} />
        </div>

        <div className="suggestions">
          <div className="suggestions-videos">
            <h2 className="suggestions-heading">Up Next</h2>
            {suggest
              ?.filter((video) => video.snippet)
              .map((s) => {
                return <SuggestVideo video={s} key={s.id.videoId} />;
              })}
          </div>
        </div>
      </div>
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
