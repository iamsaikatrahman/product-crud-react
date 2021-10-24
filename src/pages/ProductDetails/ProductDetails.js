import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const handleNameChange = (e) => {
    const updateName = e.target.value;
    const updateProduct = { ...product };
    updateProduct.name = updateName;
    setProduct(updateProduct);
  };
  const handlePriceChange = (e) => {
    const updatePrice = e.taget.value;
    const updateProduct = { ...product };
    updateProduct.price = updatePrice;
    setProduct(updateProduct);
  };
  const handleQuantityChange = (e) => {
    const updateQnt = e.target.value;
    const updateProduct = { ...product };
    updateProduct.quantity = updateQnt;
    setProduct(updateProduct);
  };
  const handleUpdateProduct = (e) => {
    const url = `http://localhost:5000/products/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Update Successfull");
          setProduct({});
          e.target.reset();
          history.push("/products");
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2>Products Details</h2>
      <img
        src={product.imageUrl}
        style={{ width: "200px", height: "150px" }}
        alt=""
      />
      <p>Id: {id}</p>
      <form onSubmit={handleUpdateProduct} className="updateForm">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          onChange={handleNameChange}
          value={product.name || ""}
        />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          onChange={handlePriceChange}
          value={product.price || ""}
        />
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          onChange={handleQuantityChange}
          value={product.quantity || ""}
        />
        <input type="submit" value="Update Product" />
      </form>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  );
};

export default ProductDetails;
