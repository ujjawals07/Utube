import React from "react";

const header = () => {
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
            <a href="#" className="fas fa-user icon"></a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default header;
