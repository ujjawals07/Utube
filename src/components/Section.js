import React from "react";
import Nav from "../components/NavBar";
import Videos from "../components/Videos";
import VideoList from "./VideoList";
const Section = () => {
  return (
    <div className="section">
      <div className="result-images">
        <div className="r-product">
          <Videos />
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Section;
