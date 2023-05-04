import React, { useEffect, useState, useContext } from "react";
import "./CardList.css";
import CardProduct from "../CardProduct/CardProduct";
import Spinner from "./../Spinner/Spinner"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
//FIREBASE
import { db } from "./../../Firebase/Firebaseconfig"
import { collection, query, getDocs, where } from "firebase/firestore"
import { CartContext } from "./../../contexts/ShoppingCartContext" ;



const ProductsList = (id, precio) => {
 const [Product, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState ([true])
  let { categoria} = useParams();
  
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: 1, precio }];
      }
    });
  };

  const removeItem = (id) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(id);


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
              {quantityPerItem > 0 && (
        <div className="item-quantity">{quantityPerItem}</div>
      )}
          {quantityPerItem === 0 ? (
        <button className="item-add-button" onClick={() => addToCart()}>
          + Add to cart
        </button>
      ) : (
        <button className="item-plus-button" onClick={() => addToCart()}>
          + add more
        </button>
      )}

      {quantityPerItem > 0 && (
        <button className="item-minus-button" onClick={() => removeItem(id)}>
          subtract item
        </button>
      )}
       
        
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