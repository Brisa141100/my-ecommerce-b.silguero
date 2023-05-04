import "./styles.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./../../contexts/ShoppingCartContext";

const Nav = () => {

  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const navStyles = {
    color: "#fff",
    listStyle: "none",
    textDecoration: "none",
  };

  return (
    <nav className="Navigation">
      <ul className="List-ul">
        <Link className="Link" to="/">
          Home
        </Link>
        <Link className="Link" to="/about">
          About
        </Link>
        <Link className="Link" to="/contact">
          Contact
        </Link>
      </ul>
      <div className="nav-list">
        <Link to={"/cart"} style={navStyles}>
          <li>
            Cart items: <span className="cart-count">{quantity}</span>
          </li>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
