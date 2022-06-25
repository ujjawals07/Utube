import React from "react";

const Comments = () => {
  return (
    <div className="comments">
      <h3>comments</h3>
      <h6 className="comments-number">999</h6>
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
        <div className="user-comments">
          <div className="comments-pic cp">
            <img
              src="public/img/4902560.jpg"
              alt=""
              srcset=""
              className="comments-img ci"
            />
          </div>
          <div className="user-comments-detail">
            <div className="user-name">
              ujjawal <span className="timeago">23 m ago</span>
            </div>
            <div className="user-comment">i am very well</div>
          </div>
        </div>
        <div className="user-comments">
          <div className="comments-pic cp">
            <img
              src="public/img/"
              alt=""
              srcset=""
              className="comments-img ci"
            />
          </div>
          <div className="user-comments-detail">
            <div className="user-name">
              ujjawal <span className="timeago">23 m ago</span>
            </div>
            <div className="user-comment">i am very well</div>
          </div>
        </div>
        <div className="user-comments">
          <div className="comments-pic cp">
            <img
              src="public/img/"
              alt=""
              srcset=""
              className="comments-img ci"
            />
          </div>
          <div className="user-comments-detail">
            <div className="user-name">
              ujjawal <span className="timeago">23 m ago</span>
            </div>
            <div className="user-comment">i am very well</div>
          </div>
        </div>
        <div className="user-comments">
          <div className="comments-pic cp">
            <img
              src="public/img/"
              alt=""
              srcset=""
              className="comments-img ci"
            />
          </div>
          <div className="user-comments-detail">
            <div className="user-name">
              ujjawal <span className="timeago">23 m ago</span>
            </div>
            <div className="user-comment">i am very well</div>
          </div>
        </div>
        <div className="user-comments">
          <div className="comments-pic cp">
            <img
              src="public/img/"
              alt=""
              srcset=""
              className="comments-img ci"
            />
          </div>
          <div className="user-comments-detail">
            <div className="user-name">
              ujjawal <span className="timeago">23 m ago</span>
            </div>
            <div className="user-comment">i am very well</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comments;
