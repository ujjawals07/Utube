import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Login } from "../Actions";
import { useNavigate } from "react-router";
const Header = () => {
  const dispatch = useDispatch();
  const Loginopen = () => {
    dispatch(Login());
  };
  let navigate = useNavigate();
  const [input, setinput] = useState("");
  const handleform = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  };
  const accessToken = useSelector((state) => state.auth);
  console.log(accessToken);
  return (
    <React.Fragment>
      <div className="header">
        <div className="header-items">
          <a href="#" className="fas fa-bars icon active"></a>
          <div className="logo">
            <img src="img/logo.png" alt="" srcset="" className="logo-youtube" />
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
            <a href="#" className="fas fa-bell icon deactive"></a>
            <a href="#" className="fas fa-user icon" onClick={Loginopen}>
              {" "}
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
