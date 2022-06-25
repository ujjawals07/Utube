import React from "react";

const VideDetails = () => {
  return (
    <div className="videoplayertv-details">
      <div className="videoplayertv-title">rahane is playaing bell today</div>
      <h5 className="views">24k views 27jan 2020</h5>
      <p className="videoplayertv-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sit
        illo optio, deserunt nisi blanditiis id explicabo quos, voluptates ipsa
        aliquid dolorem reprehenderit perferendis delectus necessitatibus vero
        excepturi corrupti officia?
      </p>
      <div className="videoplayertv-icons">
        <i className="fas fa-thumbs-up videoplayertv-icons-i"></i>
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
            ujju banna
            <h5 className="followers">7.9m</h5>
          </div>
        </div>
        <button className="subscribe">subscribe</button>
      </div>
    </div>
  );
};
export default VideDetails