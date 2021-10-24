import React from "react";
import { Link } from "react-router-dom";
import "./Headers.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/addproduct">Add Products</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
