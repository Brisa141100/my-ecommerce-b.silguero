import React from "react";
import "./About.css";
import imgAbout from "./springS3.jpg"
import imglogo from "./st-removebg-preview.png"

const About = () => {
  return (
    <div>
      <div className= "headerr">
    <p className="centrado animate__heartBeat letrawhite fondoRosa posicionarriba letra">3 y 6 cuotas sin interes</p>
     <img className="imgaboutus" src={imgAbout} alt=""/> 

    
      <p className="centrado letrawhite  titulo fondoRosa redondeado interlineadoGrande  menu letra posicionarriba"><strong>SO TRENDD</strong></p>
      </div>
<section>
   <img className="imgst" src={imglogo} alt="" /> 
    <div className="letrablack aboutus pdc"> 
    <h1 className="tittle">ABOUT US</h1>
   <p> Nuestro objetivo en SO TRENDD es principalmente ofrecer diseños vanguardistas e innovadores. Hoy en día la marca impone tendencia y se ha convertido en sinónimo de tecnología, calidad y estilo.
    Su directora creativa Brisa Silguero lidera un equipo especializado que se inspira en una mujer fuerte, natural, femenina y sexy. Crean cada colección dándole principal importancia a la originalidad de las piezas, los detalles, la innovación y la elección de materiales nobles.
    Influyente, innovador y progresista,  SO TRENDD está reinventando un enfoque totalmente moderno de la moda. Ha redefinido el lujo para el siglo XXI, reforzando aún más su posición como una de las casas de moda. Eclécticos, contemporáneos, románticos: los productos SO TRENDD son insuperables por su calidad y atención al detalle.
    </p> 
 
   </div>
   </section>
</div>
  );
};

export default About;
