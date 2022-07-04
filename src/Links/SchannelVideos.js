import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Channeldata, getVideosByChannel } from "../Actions";
import Nav from "../components/NavBar";
import numeral from "numeral";
const SchannelVideos = () => {
  const { resourceId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideosByChannel(resourceId));
    dispatch(Channeldata(resourceId));
  }, [dispatch, resourceId]);

  const { videos } = useSelector((state) => state.channelvideosR);
  const channel = useSelector((state) => state.channel);

  return (
    <div className="section">
      <div className="result-images">
        <div className="videoplayertv-channle">
          <div className="videoplayertv-channle-details">
            <div className="videoplayertv-channle-img SchannnelVideos-img">
              <img
                src={channel?.snippet?.thumbnails?.medium?.url}
                className="videoplayertv-channle-pic"
              />
            </div>
            <div className="videoplayertv-channle-name SchannnelVideos-title">
              {channel?.snippet?.title}
              <h5 className="followers">
                {" "}
                {numeral(channel?.statistics?.subscriberCount).format("0.a")}•
                subscribers
              </h5>
            </div>
          </div>
          <button className="subscribe SchannnelVideos-btn">subscribe</button>
        </div>
        <div className="r-product">
          {videos?.map((v) => {
            console.log(v);
            const videoId = v.contentDetails.videoId;
            return (
              <React.Fragment>
                <Link to={`/details/${videoId}`}>
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
                            src={channel?.snippet?.thumbnails?.medium?.url}
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
          })}
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default SchannelVideos;
