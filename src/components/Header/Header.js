import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    
     <div>
      <Link to="/">
       <p className="centrado letrawhite  titulo fondoRosa redondeado interlineadoGrande  menu letra posicionarriba">
          <strong>SO TRENDD</strong>
        </p>
      </Link>

      <div>
      <nav id="navbarr" className="navbar navbar-dark fixed-top displaynone">
      <div className="container-fluid">

        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">

            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

              <li className="nav-item">
                <a id="nav-link" className="nav-link active" aria-current="page" href="#">WHAT'S NEW</a>
              </li>
              <li className="nav-item">
              <Link to="/Zapatos" id="nav-link" className="nav-link">ZAPATOS </Link>
              </li>
              

                <li className="nav-item">
                <Link to="/Carteras" id="nav-link" className="nav-link">CARTERAS </Link>
                </li>
                <li className="nav-item">
                <Link to="/Accesorios" id="nav-link" className="nav-link">ACCESORIOS </Link>
                </li>
                <li className="nav-item">
                <Link to="/Springseason" id="nav-link" className="nav-link">SPRING SEASON </Link>
                  </li>

            </ul>

            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button id="fondo" className="btn btn-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  </div>
</div>

  );
};

export default Header;
