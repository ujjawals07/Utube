import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Login } from "../Actions";
import { useNavigate } from "react-router";
import loago from "../img/logo.png";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import NavActive from "./NavActive";
import LoginPopup from "./LoginPopup";
const Header = () => {
  const dispatch = useDispatch();
  const Loginopen = () => {
    console.log("y");
  };
  const c = () => {
    console.log('l');
   

  };

  let navigate = useNavigate();
  const [input, setinput] = useState("");
  const handleform = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  };
  // const accessToken = useSelector((state) => state.auth);
  // console.log(accessToken);

  return (
    <React.Fragment>
      <div className="header">
        <div className="header-items">
          <a href="#" className="fas fa-bars icon active" onClick={c}></a>
          <div className="logo">
            <Link to="/">
              <img src={loago} alt="" srcset="" className="logo-youtube" />
            </Link>
          </div>
          <form className="search" onSubmit={handleform}>
            <label className="fas fa-search search-label"></label>
            <input
              type="search"
              className="search-bar"
              value={input}
              onChange={(e) => setinput(e.target.value)}
            />
          </form>
          <div className="icons">
            <a className="fas fa-user icon" >
            <GoogleAuth/>
            </a>
            
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
