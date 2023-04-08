import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    
     
      <Link to="/">
       <p class="centrado letrawhite  titulo fondoRosa redondeado interlineadoGrande  menu letra posicionarriba">
          <strong>SO TRENDD</strong>
        </p>
      </Link>
 
  );
};

export default Header;
