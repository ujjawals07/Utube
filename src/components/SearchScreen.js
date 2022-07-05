import React, { useEffect, useState } from "react";
import ShowMoreText from "react-show-more-text";
import numeral from "numeral";
import moment from "moment";
import { useNavigate } from "react-router";
import YouTubeApi from "../Apis/YouTubeApi";
import { useDispatch, useSelector } from "react-redux";
import { Channeldata } from "../Actions";
const SearchScreen = ({ video }, { id }) => {
  const [channelIcon, setChannelIcon] = useState(null);
  const videoid = video.id.videoId;

  const channelId = video.snippet.channelId;

  const dispatch = useDispatch();

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await YouTubeApi("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    get_channel_icon();
  }, [channelId]);
  const navigate = useNavigate();

  const videoclick = () => {
    navigate(`/details/${videoid}`);
  };

  const channel = useSelector((state) => state.channel);
  console.log(channel);

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
            src={channelIcon?.url}
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
