import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MyLikedVideos } from "../Actions";
import { useSelector } from "react-redux";
import VideoList from "../components/VideoList";
import Nav from "../components/NavBar";
import Likescreen from "../components/Likescreen";

const MyLikeVideos = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(MyLikedVideos());
  }, [dispatch, auth]);

  const LikeVideosList = useSelector((state) => state.mylikedvideos);
  console.log(LikeVideosList);

  return (
    <div className="section">
      <Nav />
      <div className="result-image">
        <div className="r-product">
          {LikeVideosList?.map((v) => {
            return <Likescreen v={v} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MyLikeVideos;
