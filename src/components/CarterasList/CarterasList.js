import React, { useEffect, useState } from "react";
import "./CardList.css";
import CardProduct from "../CardProduct/CardProduct";
import Spinner from "./../Spinner/Spinner"
import { Link } from "react-router-dom";

//FIREBASE
import { db } from "./../../Firebase/Firebaseconfig"
import { collection, query, getDocs } from "firebase/firestore"


const CarterasList = ({
  allProducts,
  setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
  const [Product, setProductos] = useState([]);
const [isLoading, setIsLoading] = useState ([true])
const onAddProduct = Product => {
  if (allProducts.find(item => item.id === Product.id)) {
    const Products = allProducts.map(item =>
      item.id === Product.id
        ? { ...item, cantidad: item.cantidad + 1 }
        : item
    );
    setTotal(total + Product.precio * Product.cantidad);
    setCountProducts(countProducts + Product.cantidad);
    return setAllProducts([...Products]);
  }

  setTotal(total + Product.precio * Product.cantidad);
  setCountProducts(countProducts + Product.cantidad);
  setAllProducts([...allProducts, Product]);
};

  useEffect(() => {
    const getCarteras = async () => {
      const q = query(collection(db, "Carteras"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data() });
      })
      setProductos(docs);
    }
    getCarteras();
    setTimeout(() => { setIsLoading(false); }, 1000);
  }, []);

  return (
  <>
{ isLoading ? (
 
  <div className="Spinner">
  <Spinner/>
  </div>
) : (
    <div className="Cards-List">
      {Product.map ((Product) => {
        return (
          <div key={Product.id}>
            <Link to={`/carteras-detail/${Product.id}`} >
              <CardProduct data={Product} />
              </Link>   
       <button onClick={() => onAddProduct(Product)}> Añadir al carrito 
        </button>
          </div>
       );
     };
    </div>
 )}
</>
  );
};

export default CarterasList;
