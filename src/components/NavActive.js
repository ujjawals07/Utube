import React from "react";
import { Link } from "react-router-dom";
const NavActive = ({ open }) => {
  // const dispatch = useDispatch();
  // const logout = () => {
  //   dispatch(Logout());
  // };
  return (
    <React.Fragment>
      <div
        className="nav nav-hidden"
        style={{ display: open ? "block" : "none" }}
      >
        <ul className="nav-items">
          <li className="nav-item">
            <span className="fas fa-home"></span>
            <Link to={"/"} className="nav-item-btn">
              {" "}
              Home
            </Link>
          </li>
          <li className="nav-item">
            <span className="fas fa-play"></span>
            <Link to={"/feed/subscriptions"} className="nav-item-btn">
              Subscription
            </Link>
          </li>
          <li className="nav-item">
            <span className="fas fa-thumbs-up"></span>
            <Link to={"/like"} className="nav-item-btn">
              {" "}
              Likedvideos
            </Link>
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
export default NavActive;
// const sortmodal = ({ sortmodal, onClose }) => {
//   console.log(sortmodal);
//   if (!sortmodal) {
//     return null;
//   }
