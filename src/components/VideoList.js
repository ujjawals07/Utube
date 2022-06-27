import React, { useEffect } from "react";
import Videos from "./Videos";
import YouTubeApi from "../Apis/YouTubeApi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
const VideoList = ({ v }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = v;

  const videoid = id;

  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await YouTubeApi("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: videoid,
        },
      });
    };
    get_video_details();
  }, [videoid]);

  let navigate = useNavigate();
  const handleclick = () => {
    navigate(`/details/${videoid}`);
  };

  return (
    <React.Fragment>
      <div className="r-items" onClick={handleclick}>
        <div className="r-image">
          <img src={medium.url} alt="" srcset="" className="r-product-image" />
          <div className="r-item-name">{title}</div>
          <div className="r-item-price">
            <span className="fas fa-eye i"></span>
            <h2> m views 2days ago</h2>
          </div>
          <div className="r-channle-detail">
            <div className="r-channle-detail-pic">
              <img
                src="img/4902560.jpg"
                alt=""
                className="r-channle-detail-img"
              />
            </div>
            <h3>{channelTitle}</h3>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default VideoList;
/*   <div className="video">
        <div className="video-suggestions">
          <ul className="video-suggestions-list">
            <li className="video-suggestions-list-item">
              <a href="#" className="video-suggestion">
                All
              </a>
            </li>
            <li className="video-suggestions-list-item">
              <a href="#" className="video-suggestion">
                music
              </a>
            </li>
            <li className="video-suggestions-list-item">
              <a href="#" className="video-suggestion">
                cricket
              </a>
            </li>
            <li className="video-suggestions-list-item">
              <a href="#" className="video-suggestion">
                football
              </a>
            </li>
            <li className="video-suggestions-list-item">
              <a href="#" className="video-suggestion">
                News
              </a>
            </li>
            <li className="video-suggestions-list-item">
              <a href="#" className="video-suggestion">
                coding
              </a>
            </li>
            <li className="video-suggestions-list-item">
              <a href="#" className="video-suggestion">
                game
              </a>
            </li>
            <li className="video-suggestions-list-item">
              <a href="#" className="video-suggestion">
                karate
              </a>
            </li>
            <li className="video-suggestions-list-item">
              <a href="#" className="video-suggestion">
                ufc
              </a>
            </li>
            <li className="video-suggestions-list-item">
              <a href="#" className="video-suggestion">
                nba
              </a>
            </li>
            <li className="video-suggestions-list-item">
              <a href="#" className="video-suggestion">
                react
              </a>
            </li>
            <li className="video-suggestions-list-item">
              <a href="#" className="video-suggestion">
                nodejs
              </a>
            </li>
          </ul>
        </div>
        <div className="result-images">
          <div className="r-product">
            <Videos />
          </div>
        </div>
      </div>*/
