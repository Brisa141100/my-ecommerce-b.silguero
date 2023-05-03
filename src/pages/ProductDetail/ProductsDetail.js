import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "../../components/CardProduct/CardProduct";
// FIREBASE - FIRESTORE
import {
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../Firebase/Firebaseconfig";



const ProductsDetail = () => {
  const [Product, setProductos] = useState({});

  let { id } = useParams();

  useEffect(() => {
    const getAccesorios = async () => {

      const queryRef = doc(db, "Products", id);
      const response = await getDoc(queryRef );
      const newItem = {
        id: response.id,
        ...response.data(),
      };
      setProductos(newItem);
    };
    getAccesorios();
  }, [id]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "20%", marginBottom: "20%", textAlign: "center"}}
    >
      <h1>Album Details</h1>
      <CardProduct data={Product} />
    </div>
  );
};

export default ProductsDetail;