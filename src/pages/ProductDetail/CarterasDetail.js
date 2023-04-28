import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "../../components/CardProduct/CardProduct";
// FIREBASE - FIRESTORE
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";
import { db } from "../../Firebase/Firebaseconfig";



const CarterasDetail = () => {
  const [Product, setProductos] = useState({});

  let { id } = useParams();

  useEffect(() => {
    const getCarteras = async () => {
      const q = query(collection (db, "Carteras"), where(documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);
    
      querySnapshot.forEach((doc) => {

        docs.push({ ...doc.data(),id: doc.id});
      });

      setProductos(docs);
    };
    getCarteras();
  }, [id]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Album Details</h1>
      {Product.map((data) => {
        return <CardProduct  Product={data} key={data.id} /> ;
      })}
    </div>
  );
};

export default CarterasDetail;