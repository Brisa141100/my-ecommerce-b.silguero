import Swal from "sweetalert2";


const MessageSuccess = ({ purchaseID }) => {

	return (
      
	setTimeout (() => {Swal.fire({
    title: "Compra realizada con exito",
    html: `
    <h2>Su ID de transaccion es <small >${purchaseID}</small></h2>
    `,
    icon: "success",
    confirmButtonText: "Aceptar",
  })},1000) 
  )}

export default MessageSuccess;
