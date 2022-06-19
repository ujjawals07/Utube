import React from "react";

const Nav = () => {
  return (
    <React.Fragment>
      <div className="nav">
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
            <a href="#" className="nav-item-btn">
              Subscription
            </a>
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
          <li className="nav-item">
            <span className="fas fa-sign-out"></span>
            <a href="#" className="nav-item-btn">
              Log out{" "}
            </a>
          </li>
          <hr />
        </ul>
      </div>
    </React.Fragment>
  );
};
export default Nav