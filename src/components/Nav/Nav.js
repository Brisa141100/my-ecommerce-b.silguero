import "./styles.css";

import { Link } from "react-router-dom";

const Nav = () => {
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
    </nav>
  );
};

export default Nav;
