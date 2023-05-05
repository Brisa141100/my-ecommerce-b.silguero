import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
import { createContext, useEffect, useState} from "react";
const CartContext = createContext();



export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState(() => {
    try {
    
      const productosEnLocalStorage = localStorage.getItem("cartProducts");
      return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
    } catch (error) {
      return [];
    }
  });


  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartItems));
  }, [cartItems]);

  const AddItemToCart = (Products) => {
   
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === Products.id
    );

   
    if (inCart) {
      setCartItems(
        cartItems.map((productInCart) => {
          if (productInCart.id === Products.id) {
            return { ...inCart, cantidad: inCart.cantidad + 1 };
          } else return productInCart;
        })
      );
    
    } else {
      setCartItems([...cartItems, { ...Products, cantidad: 1 }]);
    }
  };


  const DeleteItemToCart = (ProductId) => {
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === ProductId
    );


    if (inCart.cantidad === 1) {
      setCartItems(
        cartItems.filter((productInCart) => productInCart.id !== ProductId)
      );
    } else {

      setCartItems(
        cartItems.map((productInCart) => {
          if (productInCart.id === ProductId) {
            return { ...inCart, cantidad: inCart.cantidad- 1 };
          } else return productInCart;
        })
      );
    }
  };

  const navegar = useNavigate()

 const ContinuarCompra = () => {if (cartItems.length === 0) {
  Swal.fire({
    title: "¡Tu carrito está vacio!",
    text: "Agrega algo para continuar con la compra",
    icon: "error",
    confirmButtonText: "Aceptar",
  });
} else { 
 navegar ("/Compra")
}}



  return (
  
    <CartContext.Provider
      value={{ cartItems, AddItemToCart, DeleteItemToCart, ContinuarCompra}}>
      {children}
    </CartContext.Provider>
  );

};

export default CartContext;