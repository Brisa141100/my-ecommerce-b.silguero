import React, { useEffect, useState } from "react";
import "./CardList.css";
import CardProduct from "../CardProduct/CardProduct";
import Spinner from "./../Spinner/Spinner"
import { Link } from "react-router-dom";

//FIREBASE
import { db } from "./../../Firebase/Firebaseconfig"
import { collection, query, getDocs } from "firebase/firestore"


const ZapatosList = () => {
  const [Product, setProductos] = useState([]);
const [isLoading, setIsLoading] = useState ([true])

  useEffect(() => {
    const getZapatos = async () => {
      const q = query(collection(db, "ZapatosList"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data() });
      })
      setProductos(docs);
    }
    getZapatos();
    setTimeout(() => { setIsLoading(false); }, 1000);
  }, []);

  return (
  <>
{isLoading ? (
 
  <div className="Spinner">
  <Spinner/>
  </div>
) : (
    <div className="Cards-List">
      {Product.map((Product) => {
        return (
          <div key={Product.id}>
            <Link to={`/product-detail/${Product.id}`}>
              <CardProduct data={Product} />
            </Link>
          </div>
        );
      })}
    </div>
 )}
</>
  );
};

export default ZapatosList;
