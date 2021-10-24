import React, { useRef } from "react";

const AddProduct = () => {
  const nameRef = useRef();
  const imageLInkRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();
  const handleAddProduct = (e) => {
    const name = nameRef.current.value;
    const imageUrl = imageLInkRef.current.value;
    const price = priceRef.current.value;
    const quantity = quantityRef.current.value;
    const newProduct = { name, imageUrl, price, quantity };
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully addedd a product");
          e.target.reset();
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2>Please Add a prodcut</h2>
      <form onSubmit={handleAddProduct}>
        <label htmlFor="name">Name : </label>
        <input type="text" ref={nameRef} name="" id="" />
        <br />
        <label htmlFor="link">ImageLink : </label>
        <input type="text" ref={imageLInkRef} name="" id="" />
        <br />
        <label htmlFor="price">Price : </label>
        <input type="text" ref={priceRef} name="" id="" />
        <br />
        <label htmlFor="quantity">Quantity : </label>
        <input type="text" ref={quantityRef} name="" id="" />
        <br />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddProduct;
