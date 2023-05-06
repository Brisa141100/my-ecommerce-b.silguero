import * as React from "react";
import Swal from "sweetalert2"

const MessageSuccess = ({ purchaseID }) => {

	return (
	setTimeout (() => {Swal.fire({
    title: "Compra realizada con exito",
text: "Su ID de compra es {purchaseID}",
    icon: "success",
    confirmButtonText: "Aceptar",
  })},3000) 
  )}

export default MessageSuccess;
