import React, { useState } from "react";
import "./compra.css"
// Firebase
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
  name: "",
  lastName: "",
  city: "",
};

const Compra = () => {
  const [values, setValues] = useState(initialState);
  // Este estado está destinado a guardar el id de la compra
  const [purchaseID, setPurchaseID] = useState("");

  const onChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "purchases"), {
      values,
    });
    // console.log("Document written with ID: ", docRef.id);
    setPurchaseID(docRef.id);
    setValues(initialState);
  };

  return (
    <div style={styles.containerShop}>
      <h2>Finalizar compra</h2>
      <form className="FormContainer" onSubmit={onSubmit}>
        <TextField
          placeholder="Name"
          style={{ margin: 10, width: 400 }}
          name="name"
          value={values.name}
          onChange={onChange}
        />
        <TextField
          placeholder="Last Name"
          style={{ margin: 10, width: 400 }}
          name="lastName"
          value={values.lastName}
          onChange={onChange}
        />
        <TextField
          placeholder="City"
          style={{ margin: 10, width: 400 }}
          name="city"
          value={values.city}
          onChange={onChange}
        />
        <button className="btnASendAction" type="submit">
          Send
        </button>
      </form>
      {purchaseID.length ? <MessageSuccess purchaseID={purchaseID} /> : null}
    </div>
  );
};

export default Compra;
