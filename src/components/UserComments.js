import React from "react";
import moment from "moment";

const UserComments = ({ comment }) => {
  return (
    <div className="user-comments">
      <div className="comments-pic cp">
        <img
          src={comment.authorProfileImageUrl}
          alt=""
          srcset=""
          className="comments-img ci"
        />
      </div>
      <div className="user-comments-detail">
        <div className="user-name">
          {comment.authorDisplayName}{" "}
          <span className="timeago">
            {" "}
            {moment(comment.updatedAt).fromNow()}
          </span>
        </div>
        <div className="user-comment" dangerouslySetInnerHTML={{ __html:comment.textDisplay }}/>
      </div>
    </div>
  );
};
export default UserComments;
