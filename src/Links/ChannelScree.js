import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { getVideosByChannel } from "../Actions";
const ChannelsScreen = () => {
  //const { channelId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideosByChannel());
  }, [dispatch]);

  return <div>he</div>;
};

export default ChannelsScreen;
