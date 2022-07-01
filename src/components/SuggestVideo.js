import React from "react";
import numeral from "numeral";
import moment from "moment";
import { useNavigate } from "react-router";
const SuggestVideo = ({ video }, { key }) => {
  const navigate = useNavigate();
  const videoId = video.id.videoId;
  const videoClick = () => {
    navigate(`/details/${videoId}`);
  };
  return (
    <React.Fragment>
      <div className="suggestions-videos-item" onClick={videoClick}>
        <div className="suggestions-videos-item-img">
          <img
            src={video.snippet.thumbnails.medium.url}
            alt=""
            srcset=""
            className="suggestions-videos-item-pic"
          />
        </div>
        <div className="suggestions-videos-item-details">
          <h5 className="suggestions-videos-item-details-h">
            {video.snippet.title}
          </h5>
          <div className="suggestions-videos-item-details-views">
            <span className="suggestions-videos-item-details-date">
              {moment(video.snippet.publishedAt).fromNow()}
            </span>
          </div>
          <div className="suggestions-videos-item-channle">
            <div className="suggestions-videos-item-channle-name">
              {video.snippet.channelTitle}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default SuggestVideo;
