import React, { useEffect, useState } from "react";
import "./CardList.css";
import CardProduct from "../CardProduct/CardProduct";
import Spinner from "./../Spinner/Spinner"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
//FIREBASE
import { db } from "./../../Firebase/Firebaseconfig"
import { collection, query, getDocs, where } from "firebase/firestore"


const ProductsList = () => {
 const [Product, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState ([true])
  let { categoria} = useParams();

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "Products"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data() });
      })
      setProductos(docs);
    }
     const getProductsByCategory = async () => {
      const q = query(collection(db, "Products"), where("categoria", "==", categoria));
      const docs = [];
     const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data() });
       })
      setProductos(docs);
    }

     if (categoria) {
      getProductsByCategory()
     } else {
      getProducts();
     }
    setTimeout(() => { setIsLoading(false); }, 1000);
  }, [categoria]);
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