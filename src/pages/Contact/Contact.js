import React from "react";
import "./Contact.css"
import mastercard from "./mastercard@2x.png"
import visa from "./visa@2x.png"
import rapipago from "./rapipago@2x.png"
import banelco from "./banelco@2x.png"
import tarjetanaranja from "./tarjeta-naranja@2x.png"
import mercadopago from "./mercadopago@2x.png"

const Contact = () => {
 
  return (
  <div className="footer"> 
  <div className="accordion accordion-flush" id="accordionFlushExample">
  <div   className="accordion-item centrado">
    <h1 className="accordion-header letra letrablack" id="flush-headingOne">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Tiempos de envio
      </button>
    </h1>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
      data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> 
      dskjkjlsdfn
    </div>
  </div>
  <div className="accordion-item">
    <h1 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Cambios y devoluciones
      </button>
    </h1>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
      data-bs-parent="#accordionFlushExample">
      <div className="accordion-body pdc2">
        <h4 className="tittle">Como realizar un cambio</h4>
        <p>Todos los productos adquiridos en SOTRENDD.com.ar tienen un plazo maximo de cambio de<strong> 30 dias corridos </strong>. Podes efectuar el cambio de tu producto completando el siguiente formulario.
        <a href="./solicitud.html">Solicitud de cambio</a>
        <h4 className="tittle">Estado del cambio</h4>
        ¡Para realizar un cambio el producto debe presentarse en perfectas condiciones y con su packaging original completo, caso contrario no podremos avanzar con el cambio!
        <h4 className="tittle">Plazos de cambio</h4>
        El proceso de cambio a traves del correo puede tomar hasta 30 dias habiles y verse demorado dado los plazos de recoleccion y procesamiento del correo.
        ¡Si este es el primer cambio de tu orden, entonces el envio corre por nuestra cuenta! Si ya realizaste otro cambio de la misma orden, entonces deberas abonar el costo de envio que es de $1000ARS para CABA y GBA y de $2000ARS para el interior del pais.
        <h4 className="tittle">Reintegro del pago</h4>
        Una vez que recibamos el producto anularemos tu orden y devolveremos tu dinero en el mismo medio de pago que realizaste la orden. Ademas, te enviaremos un comprobante por la cancelacion. Dependiendo la entidad bancaria el reintegro puede demorar hasta <strong>48 horas</strong> en verse reflejado en tu cuenta.
        </p></div>
    </div>
  </div>
  <div className="accordion-item">
    <h1 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Contact us
      </button>
    </h1>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
      data-bs-parent="#accordionFlushExample">
      <div className="accordion-body letrablack letra formc">
        
          <fieldset>
            <h3 className="tittle">Formulario de contacto</h3>
            <div>
              <label for="nombre">Nombre:</label>
              <input type="text" id="input2" />
            </div>
            <div>
              <label for="apellido">Apellido:</label>
              <input type="text" id="input2" />
            </div>
            <div>
              <label for="email">Correo electronico:</label>
              <input type="email" id="email" placeholder="nombre@ejemplo.com" />
            </div>
            <div>
              <label for="number">DNI:</label>
              <input type="number" id="input2" />
            </div>
            <div>
              <label for="number">Tel:</label>
              <input type="number" id="input2" />
            </div>
           
            <label id="motivo" for="Motivo de consulta">Motivo de consulta</label>
           <div id="motivo"><select id="motivo" >
              <option value="SOLICITUD DE FACTURA A"></option>
              <option value="QUIERO REALIZAR UN CAMBIO">QUIERO REALIZAR UN CAMBIO</option>
              <option value="SOLICITUD DE FACTURA A">SOLICITUD DE FACTURA A</option>
              <option value="QUIERO DEVOLVER UN PRODUCTO">QUIERO DEVOLVER UN PRODUCTO</option>
              <option value="OTRAS CONSULTAS">OTRAS CONSULTAS</option>
            </select>
           </div>
           <div>
            <button  id="fondo2" className="btn btn-success" type="submit">Enviar</button>
          </div>
          </fieldset>
        </div>

      </div>
    </div>
  </div>
</div>
<div id="mdepago">
  <img id="mastercard" src={visa} alt="visa" />
  <img id="mastercard" src={mastercard} alt="mastercard" />
  <img id="mastercard" src={mercadopago} alt="mercadopago" />
  <img id="mastercard" src={tarjetanaranja} alt="tarjetanaranja"/>
  <img id="mastercard" src={banelco} alt="banelco" />
  <img id="mastercard" src={rapipago}alt="rapipago" />


  <p id="CST">© Copyright SO TRENDD-2022</p>
</div>
</div>
);
};

export default Contact;