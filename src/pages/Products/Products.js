import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h2>There are total {products.length} products available</h2>
      <ul>
        {products.map((item) => (
          <li key={item._id}>
            Name: {item.name} :: Price: ${item.price} :: Quantity:{" "}
            {item.quantity}{" "}
            <Link to={`/details/${item._id}`}>
              <button>Update</button>
            </Link>{" "}
            <button>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
