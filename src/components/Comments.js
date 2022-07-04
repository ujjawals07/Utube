import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GetComments } from "../Actions";
import { useSelector } from "react-redux";
import UserComments from "./UserComments";
import { MyComments } from "../Actions";
const Comments = ({ videoid }) => {
  console.log(videoid);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetComments(videoid));
  }, [videoid, dispatch]);

  const CommentList = useSelector((state) => state.commentlist);
  const cl = CommentList?.map((c) => c.snippet.topLevelComment.snippet);

  const Submit = (e) => {
    e.preventDefault();
    dispatch(MyComments(videoid, text));
    setText("");
  };

  return (
    <div className="comments">
      <h3>comments</h3>
      <h6 className="comments-number"></h6>
      <div className="comments-comment">
        <div className="comments-pic user-cp">
          <img src="public/img/" alt="" srcset="" className="comments-img" />
        </div>
        <form className="comments-inputs" onSubmit={Submit}>
          <input
            type="text"
            placeholder="write here"
            className="comments-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
        <button className="comment" onClick={Submit}>
          comment
        </button>
      </div>
      <div className="users">
        {cl.map((comment, i) => {
          return <UserComments comment={comment} key={i} />;
        })}
      </div>
    </div>
  );
};
export default Comments;
