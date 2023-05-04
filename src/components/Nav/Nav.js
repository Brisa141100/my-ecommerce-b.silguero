import "./styles.css";
import React from "react";
import { Link } from "react-router-dom";
import Cart from "./../Cart/index"

const Nav = () => {



  return ( <div>
    <nav className="Navigation">
      <ul className="List-ul">
        <Link className="Link" to="/">
          Home
        </Link>
        <Link className="Link" to="/about">
          About
        </Link>
        <Link className="Link" to="/contact">
          Contact
        </Link>
      </ul>
 
    </nav> <div><Cart/></div> </div>
  );
};

export default Nav;
