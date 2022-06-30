import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetComments } from "../Actions";
import { useSelector } from "react-redux";
import UserComments from "./UserComments";
const Comments = ({ videoid }) => {
  console.log(videoid);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetComments(videoid));
  }, [videoid, dispatch]);

  const CommentList = useSelector((state) => state.commentlist);

  const cl = CommentList?.map((c) => c.snippet.topLevelComment.snippet);
  console.log(cl);

  return (
    <div className="comments">
      <h3>comments</h3>
      <h6 className="comments-number"></h6>
      <div className="comments-comment">
        <div className="comments-pic user-cp">
          <img src="public/img/" alt="" srcset="" className="comments-img" />
        </div>
        <div className="comments-inputs">
          <input type="text" value="write here" className="comments-input" />
        </div>
        <button className="comment">comment</button>
      </div>
      <div className="users">
        {cl.map((comment,i) => {
          return <UserComments comment={comment} key={i} />;
        })}
      </div>
    </div>
  );
};
export default Comments;
