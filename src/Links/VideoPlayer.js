import React from "react";
import Videos from "../components/Videos";
import { useParams } from "react-router-dom";
const VideoPlayer = () => {
  const { id } = useParams();
  return (
    <div className="u">
      <h2>ujjawal</h2>
      <iframe
        width="420"
        height="315"
        title="ujjawal"
        src={`https://www.youtube.com/embed/${id}`}
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
