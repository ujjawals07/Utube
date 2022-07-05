import React from "react";

const NavActive = ({ sortmodal, onClose }) => {

  return (
    <React.Fragment>
      <nav class="nav_list active" id="navlistactive">
        <li class="nav-items">Home</li>
        <li class="nav-items" id="products">
          Products
        </li>
        <li class="nav-items" id="upcoming">
          Upcoming
        </li>
        <li class="nav-items" id="review">
          Review
        </li>
      </nav>
    </React.Fragment>
  );
};
export default NavActive
// const sortmodal = ({ sortmodal, onClose }) => {
//   console.log(sortmodal);
//   if (!sortmodal) {
//     return null;
//   }