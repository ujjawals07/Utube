import React from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Detailsdata } from "../Actions";
import VideDetails from "../components/VideoDetails";
import Comments from "../components/Comments";
import SuggestVideo from "../components/SuggestVideo";
import { useSelector } from "react-redux";
const Check = () => {
  const { i } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Detailsdata(i));
  }, [dispatch, i]);
  const video = useSelector((state) => state.description);
  console.log(video?.snippet?.title);
  return (
    <div className="videoplayer">
      <div className="videoplayertv">
        <div class="videoplayertv-iframe">
          <iframe
            className="iframetv"
            width="500"
            height="300"
            title="my"
            src={`https://www.youtube.com/embed/${i}`}
          ></iframe>
        </div>
      </div>
      <VideDetails video={i} />
      <Comments videoid={i} />
    </div>
  );
};
export default Check;
