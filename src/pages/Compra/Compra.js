import React from "react";
import "./compra.css";

const Compra = () => {

return (
<div>
<button id="activarFuncion" className="btn btn-secondary boton mt-2 d-none">¡Click!</button>


    <div className="container">
        <div className="row mt-3">
            <div className="col">
                <h2 className="d-flex justify-content-center mb-3">Realizar Compra</h2>
                
                <form id="procesar-pago" method="POST">
                    <div className="form-group row">
                        <label for="cliente" className="col-12 col-md-2 col-form-label h2">Cliente :</label>
                        <div className="col-12 col-md-10">
                            <input type="text" className="form-control" id="persona"
                                placeholder="Ingresa tu nombre y apellido" name="persona"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="email" className="col-12 col-md-2 col-form-label h2">Correo :</label>
                        <div className="col-12 col-md-10">
                            <input type="text" id="correo" className="form-control" name="email.id" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="email" className="col-12 col-md-2 col-form-label h2">Provincia :</label>
                        <div className="col-12 col-md-10">
                            <input type="text" id="Provincia" className="form-control" name="provincia" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="email" className="col-12 col-md-2 col-form-label h2">Direccion :</label>
                        <div className="col-12 col-md-10">
                            <input type="text" id="correo" className="form-control" name="direccion" />
                        </div>
                    </div>  <div className="form-group row">
                        <label for="email" className="col-12 col-md-2 col-form-label h2">Cod. postal:</label>
                        <div className="col-12 col-md-10">
                            <input type="number" id="correo" className="form-control" name="number" />
                        </div>
                    </div>
                  
                    <div id="carrito" className="form-group table-responsive">
                        <table className="table" id="lista-compra">
                            <thead>
                                <tr>
                                    <th scope="col">Imagen</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Sub Total</th>
                                </tr>

                            </thead>
                            <tbody>

                            </tbody>
                            <tr>
                                <th colspan="4" scope="col" className="text-right">TOTAL: $

                                    <p id="totalProceso"></p>
                                    <div className="row justify-content-center d-none" id="spinner">
                                        <div className="sk-circle">
                                            <div className="sk-circle1 sk-child"></div>
                                            <div className="sk-circle2 sk-child"></div>
                                            <div className="sk-circle3 sk-child"></div>
                                            <div className="sk-circle4 sk-child"></div>
                                            <div className="sk-circle5 sk-child"></div>
                                            <div className="sk-circle6 sk-child"></div>
                                            <div className="sk-circle7 sk-child"></div>
                                            <div className="sk-circle8 sk-child"></div>
                                            <div className="sk-circle9 sk-child"></div>
                                            <div className="sk-circle10 sk-child"></div>
                                            <div className="sk-circle11 sk-child"></div>
                                            <div className="sk-circle12 sk-child"></div>
                                          </div>
                                           </div>
                                </th>

                            </tr>

                        </table>
                    </div>
                    
                   
                    <div className="row justify-content-between">
                        <div className="col-md-4 mb-2">
                            <p className="btn btn-info btn-block">Seguir comprando</p>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <input type="submit" className="btn btn-success btn-block" id="button"
                                value="Finalizar compra"/>
                        </div>
                        
                    </div>
                </form>


            </div>


        </div>

    </div>

</div>
);
};

export default Compra;