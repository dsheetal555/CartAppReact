import React from "react";
import "./CartItem.css";

const CartItem = () => {
  const addItemToCartFunction = () => {
    console.log("heloo");
  };
  return (
    <div className="product-list">
      <div className="product" key={"product.id"}>
        <img src={""} alt={""} />
        <h2>{"product.name"}</h2>
        <p>Price: ₹{100}</p>
        <button
          className="add-to-cart-button"
          onClick={() => addItemToCartFunction}
        >
          Add to Shopping Cart
        </button>
      </div>
      <div className="product" key={"product.id"}>
        <img src={""} alt={""} />
        <h2>{"product.name"}</h2>
        <p>Price: ₹{100}</p>
        <button
          className="add-to-cart-button"
          onClick={() => addItemToCartFunction}
        >
          Add to Shopping Cart
        </button>
      </div>
      <div className="product" key={"product.id"}>
        <img src={""} alt={""} />
        <h2>{"product.name"}</h2>
        <p>Price: ₹{100}</p>
        <button
          className="add-to-cart-button"
          onClick={() => addItemToCartFunction}
        >
          Add to Shopping Cart
        </button>
      </div>
      <div className="product" key={"product.id"}>
        <img src={""} alt={""} />
        <h2>{"product.name"}</h2>
        <p>Price: ₹{100}</p>
        <button
          className="add-to-cart-button"
          onClick={() => addItemToCartFunction}
        >
          Add to Shopping Cart
        </button>
      </div>
    </div>
  );
};

export default CartItem;
