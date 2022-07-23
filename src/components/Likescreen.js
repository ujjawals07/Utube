import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import YouTubeApi from "../Apis/YouTubeApi";
import { useSelector } from "react-redux";
const Likescreen = ({ v }) => {
  const [channelIcon, setChannelIcon] = useState(null);
  const channelId = v.snippet.channelId;
  const auth = useSelector((state) => state.auth);
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
  }, [channelId, auth]);

  return (
    <React.Fragment>
      <Link to={`/details/${v.id}`} style={{ textDecoration: "none" }}>
        <div className="r-items">
          <div className="r-image">
            <img
              src={v.snippet.thumbnails.medium.url}
              alt=""
              srcset=""
              className="r-product-image"
            />
            <div className="r-item-name">{v.snippet.title}</div>
            <div className="r-item-price">
              <span className="fas fa-eye i"></span>
              <h2 className="videolist-views"> 5m views 2days ago</h2>
            </div>
            <div className="r-channle-detail">
              <div className="r-channle-detail-pic">
                <img
                  src={channelIcon?.url}
                  alt=""
                  className="r-channle-detail-img"
                />
              </div>
              <h3>{v.snippet.channelTitle}</h3>
            </div>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
};

export default Likescreen;
