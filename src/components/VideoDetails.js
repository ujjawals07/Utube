import React from "react";
import numeral from "numeral";
import moment from "moment";
import ShowMoreText from "react-show-more-text";
const VideDetails = ({ video }, { videoid }) => {
  return (
    <div className="videoplayertv-details">
      <div className="videoplayertv-title">{video?.snippet?.title}</div>
      <h5 className="views">
        {" "}
        {numeral(video?.statistics?.viewCount).format("0.a")} Views •{" "}
        {moment(video?.snippet?.publishedAt).fromNow()}
      </h5>
      <ShowMoreText
        lines={3}
        more="show more"
        less="show less"
        anchorClass="show  more text"
        expanded={false}
        className="show"
      >
        <p className="videoplayertv-description">
          {video?.snippet?.description}
        </p>
      </ShowMoreText>
      <div className="videoplayertv-icons">
        <i className="fas fa-thumbs-up videoplayertv-icons-i">
          <span className="inumber">
            {numeral(video?.statistics?.likeCount).format("0.a")}
          </span>
        </i>
        <i className="fas fa-thumbs-down videoplayertv-icons-i"></i>
        <i className="fas fa-heart videoplayertv-icons-i"></i>
      </div>

      <div className="videoplayertv-channle">
        <div className="videoplayertv-channle-details">
          <div className="videoplayertv-channle-img">
            <img
              src="img/4902560.jpg"
              alt=""
              srcset=""
              className="videoplayertv-channle-pic"
            />
          </div>
          <div className="videoplayertv-channle-name">
            {video?.snippet?.channelTitle}
            <h5 className="followers">7.9m</h5>
          </div>
        </div>
        <button className="subscribe">subscribe</button>
      </div>
    </div>
  );
};
export default VideDetails;
