import React from "react";
import Header from "./components/Header";
import css from "./main.css";
import VideoPlayer from "./Links/VideoPlayer";
import Nav from "./components/NavBar";
import SearchResult from "./Links/SeachResult";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Like from "./components/Like";
import GoogleAuth from "./components/GoogleAuth";
import SubscribeChannels from "./Links/SubscribeChannels";
import ChannelsScreen from "./Links/ChannelScree";
import SchannelVideos from "./Links/SchannelVideos";
import MyLikeVideos from "./Links/MyLikeVideos";
import Videos from "./components/Videos";
const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Videos />} />
          <Route path="/details/:id" element={<VideoPlayer />} />
          <Route path="/search/:q" element={<SearchResult />} />
          <Route path="/feed/subscriptions" element={<SubscribeChannels />} />
          <Route path="/like" element={<MyLikeVideos />} />
          <Route path="/channel" element={<ChannelsScreen />} />
          <Route
            path="/subscribechannelvideos/:resourceId"
            element={<SchannelVideos />}
          />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
