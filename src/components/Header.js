import React from "react";
import { useDispatch } from "react-redux";
import { Login } from "../Actions";
const Header = () => {
  const dispatch = useDispatch();
  const Loginopen = () => {
    dispatch(Login());
    console.log("op");
  };
  return (
    <React.Fragment>
      <div className="header">
        <div className="header-items">
          <a href="#" className="fas fa-bars icon active"></a>
          <div className="logo">
            <img src="img/logo.png" alt="" srcset="" className="logo-youtube" />
          </div>
          <div className="search">
            <label className="fas fa-search search-label"></label>
            <input type="search" className="search-bar" />
          </div>
          <div className="icons">
            <a href="#" className="fas fa-bell icon deactive"></a>
            <a href="#" className="fas fa-user icon" onClick={Loginopen}></a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
