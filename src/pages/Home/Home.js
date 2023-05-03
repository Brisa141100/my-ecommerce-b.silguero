import React from "react";
import Kendall from "./kendall.jpg";
import portada1 from "./portada.1.webp";
import portada2 from "./portada.jpg";
import "./Home.css";
import ss1 from "./SS4.jpg";

const Home = () => {
  return (

    <div>


      <p class="centrado animate__heartBeat letrawhite fondoRosa posicionarriba letra">3 y 6 cuotas sin interes</p>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Kendall} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={portada1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={portada2} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div id="contentt" class="content">
        <div class="gridc">
          <figure class="effect-lily">
            <img src={ss1} alt="" />
            <figcaption>
              <h2>SUMMER SEASON <span>Comming soon</span></h2>
              <p><strong>Get ready with us</strong> </p>
           
            </figcaption>
          </figure>
        </div>
        </div>
        </div>
    
      
        );
};

        export default Home;
