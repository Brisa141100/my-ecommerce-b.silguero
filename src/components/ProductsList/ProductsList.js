import React, { useEffect, useState } from "react";
import "./CardList.css";
import CardProduct from "../CardProduct/CardProduct";
import Spinner from "./../Spinner/Spinner"
import { Link } from "react-router-dom";

//FIREBASE
import { db } from "./../../Firebase/Firebaseconfig"
import { collection, query, getDocs } from "firebase/firestore"


const ProductsList = () => {
 const [Product, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState ([true])

  useEffect(() => {
    const getProducts= async () => {
      const q = query(collection(db, "Products"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data() });
      })
      setProductos(docs);
    }
    getProducts();
    setTimeout(() => { setIsLoading(false); }, 1000);
  }, []);

 

  return (
  <>
{ isLoading ? (
 
  <div className="Spinner">
  <Spinner/>
  </div>
) : ( 
    <div className="Cards-List"  key={Product.categoria}>
   
      {Product.map ((Product) => {
        return (
          <div key={Product.id}>
            <Link to={`detalle/${Product.id}`} >
              <CardProduct data={Product} />
              </Link>   
       <button> Añadir al carrito 
        </button>
        
          </div>
       );
     })
    }
    </div>
 )}
</>
  );
};

export default ProductsList;