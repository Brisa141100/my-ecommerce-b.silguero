import React, { useState } from "react";
import "./compra.css"

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase/Firebaseconfig";


import TextField from "@mui/material/TextField";

import MessageSuccess from "../../components/MessageSuccess/MessageSuccess";

const styles = {
  containerShop: {
    textAlign: "center",
    paddingTop: "20%",
    position: "relative",
  },
};

const initialState = {
  nombre: "",
  apellido: "",
  ciudad: "",
};

const Compra = () => {
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState("");

  const onChange = (e) => {
    const { value, nombre } = e.target;
    setValues({ ...values, [nombre]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  
    const docRef = await addDoc(collection(db, "purchases"), {
      values,
    });

    setPurchaseID(docRef.id);
    setValues(initialState);
  };

  return (
    <div style={styles.containerShop}>
      <h2>Finalizar compra</h2>
      <form className="FormContainer" onSubmit={onSubmit}>
        <TextField
          placeholder="Nombre"
          style={{ margin: 10, width: 400 }}
          name="nombre"
          value={values.nombre}
          onChange={onChange}
        />
        <TextField
          placeholder="Apellido"
          style={{ margin: 10, width: 400 }}
          name="apellido"
          value={values.apellido}
          onChange={onChange}
        />
        <TextField
          placeholder="Ciudad"
          style={{ margin: 10, width: 400 }}
          name="ciudad"
          value={values.ciudad}
          onChange={onChange}
        />
        <button className="btnASendAction" type="submit">
          Enviar
        </button>
      </form>
      {purchaseID.length ? <MessageSuccess purchaseID={purchaseID} /> : null}
    </div>
  );
};

export default Compra;
