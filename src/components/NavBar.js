import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Logout } from "../Actions";
import GoogleAuth from "./GoogleAuth";
const Nav = () => {
  // const dispatch = useDispatch();
  // const logout = () => {
  //   dispatch(Logout());
  // };
  return (
    <React.Fragment>
      <div className="nav nav-hidden">
        <ul className="nav-items">
          <li className="nav-item">
            <span className="fas fa-home"></span>
            <a href="#" className="nav-item-btn">
              {" "}
              Home
            </a>
          </li>
          <li className="nav-item">
            <span className="fas fa-play"></span>
            <Link to={"/feed/subscriptions"} className="nav-item-btn">
              Subscription
            </Link>
          </li>
          <li className="nav-item">
            <span className="fas fa-thumbs-up"></span>
            <a href="#" className="nav-item-btn">
              {" "}
              Likedvideos
            </a>
          </li>
          <li className="nav-item">
            <span className="fas fa-clock"></span>
            <a href="#" className="nav-item-btn">
              {" "}
              Watch later
            </a>
          </li>
          <br />

          <hr />
        </ul>
      </div>
    </React.Fragment>
  );
};
export default Nav;
