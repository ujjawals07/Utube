import React from "react";
import Header from "./components/Header";
import css from "./main.css";
import Nav from "./components/NavBar";
import Videos from "./components/Videos";
const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="section">
      <Videos />
      <Nav />
      
      </div>
    </React.Fragment>
  );
};

export default App;
