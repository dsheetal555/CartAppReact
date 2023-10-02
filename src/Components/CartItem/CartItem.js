import React, { useState } from "react";
import "./CartItem.css";
import ModalPopup from "../Modal/Modal";

const CartItem = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cartItem, setCartItem] = useState("");

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const editCartItem = (eachItem) => {
    setCartItem(eachItem);
    setModalIsOpen(true);
  };
  const deleteCartItem = (eachItem) => {
    console.log(eachItem);
  };
  return (
    <div className="product-list">
      <button
        onClick={() => {
          setModalIsOpen(true);
          setCartItem("");
        }}
      >
        Add NewItem
      </button>
      {props.items.map((item, i) => {
        return (
          <div className="product" key={i}>
            <img src={""} alt={""} />
            <h2>{item.name}</h2>
            <p>Price: ₹{item.price}</p>
            <p>{item.description}</p>
            <button
              className="add-to-cart-button"
              onClick={() => editCartItem(item)}
            >
              Edit item
            </button>
            <button
              className="add-to-cart-button"
              onClick={() => deleteCartItem(item)}
            >
              delete item
            </button>
          </div>
        );
      })}
      {modalIsOpen && (
        <ModalPopup
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          cartItem={cartItem}
        />
      )}
      ;
    </div>
  );
};

export default CartItem;
