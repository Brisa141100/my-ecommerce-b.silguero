import React from "react";
import "./Header.css";


const Header = (props) => {
  // console.log(props);
  return (
    <div className="Header">
      
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
    </div>
  );
};

export default Header;
