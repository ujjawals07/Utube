import React from "react";
import Header from "./components/Header";
import css from "./main.css";
import Section from "./components/Section";
import VideoPlayer from "./Links/VideoPlayer";
import Nav from "./components/NavBar";
import SearchResult from "./Links/SeachResult";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Like from "./components/Like";
import Check from "./Links/Check";
const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Section />} />
          <Route path="/details/:id" element={<VideoPlayer />} />
          <Route path="/search/:q" element={<SearchResult />} />      
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
