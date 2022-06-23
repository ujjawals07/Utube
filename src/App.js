import React from "react";
import Header from "./components/Header";
import css from "./main.css";
import Section from "./components/Section";
import VideoPlayer from "./Links/VideoPlayer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Like from "./components/Like";
const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Section />} />
          <Route path="/details/:id" element={<VideoPlayer />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
