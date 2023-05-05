import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import styles from "./styles.module.scss";

export const ItemCart = ({ item }) => {
  /* Traemos del context las funciones para agregar y sacar productos del carrito */
  const { DeleteItemToCart, AddItemToCart } = useContext(CartContext);

  /* Desestructuramos el item para sacar solo la id */
  const { id } = item;

  return (
    <div className={styles.cartItem}>
      <img src={item.img} alt={item.name} />
      <div className={styles.dataContainer}>
        <div className={styles.left}>
          <p>{item.name}</p>
          <div className={styles.buttons}>
             <button onClick={() => DeleteItemToCart(id)}>-</button>
             <button onClick={() => AddItemToCart(item)}>+</button>
           
          </div>
        </div>
        <div className={styles.right}>
          <div>{item.cantidad}</div>
          <p>Total: ${item.cantidad * item.precio}</p>
        </div>
      </div>
    </div>
  );
};