import React, { useEffect } from "react";
import ShowMoreText from "react-show-more-text";
import numeral from "numeral";
import moment from "moment";
import { useNavigate } from "react-router";
import YouTubeApi from "../Apis/YouTubeApi";
const SearchScreen = ({ video }, { id }) => {
  console.log(video);
  const videoid = video.id.videoId;


  const navigate = useNavigate();

  const videoclick = () => {
    navigate(`/details/${videoid}`);
  };
  return (
    <div className="search-screen-result" onClick={videoclick}>
      <div className="search-screen-img">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt=""
          srcset=""
          className="search-screen-pic"
        />
      </div>
      <div className="search-screen-result-details">
        <h2 className="search-screen-h">{video.snippet.title}</h2>

        <h5 className="view"> {moment(video.snippet.publishedAt).fromNow()}</h5>
        <div className="search-screen-channel">
          <img
            src="img/4902560.jpg"
            alt=""
            srcset=""
            className="search-screen-channel-img"
          />
          <h3 className="search-screen-channel-h">
            {video.snippet.channelTitle}
          </h3>
        </div>
      </div>
    </div>
  );
};
export default SearchScreen;
