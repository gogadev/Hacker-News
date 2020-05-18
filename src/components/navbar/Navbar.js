import React from "react";

import span from "../../assets/img.png";
import image from "../../assets/nav.png";

import "./navbar.style.css";

const Navbar = () => {
  return (
    <nav>
      <h1 className="title">
        <img className="span-title" src={span} alt="" />
      </h1>
      <div className="nav-image">
        {" "}
        <img className="image" src={image} alt="" />
      </div>
      <h1 className="news">News</h1>
    </nav>
  );
};

export default Navbar;
