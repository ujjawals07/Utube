import React, { useEffect } from "react";
import Nav from "../components/NavBar";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { MySubscription } from "../Actions";
import { Link } from "react-router-dom";
const SubscribeChannels = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(MySubscription());
  }, [dispatch, auth]);

  const videos = useSelector((state) => state.mysubscription.videos);

  return (
    <div className="section">
      <Nav />

      <div className="search-screen">
        <div className="search-screen-container">
          {videos?.map((v) => {
            const resourceId = v.snippet.resourceId.channelId;
            return (
              <React.Fragment>
                <Link
                  to={`/subscribechannelvideos/${resourceId}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="search-screen-result s-result">
                    <div className="search-screen-img s-img">
                      <img
                        src={v?.snippet?.thumbnails?.medium?.url}
                        alt=""
                        srcset=""
                        className="search-screen-pic s-pic"
                      />
                    </div>
                    <div className="search-screen-result-details">
                      <h2 className="search-screen-h s-title">
                        {v?.snippet?.title}
                      </h2>
                      <p className="s-para">{v?.snippet?.description}</p>
                      <h5 className="view">
                        {" "}
                        {v?.contentDetails?.totalItemCount} videos
                      </h5>
                    </div>
                  </div>
                </Link>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubscribeChannels;
