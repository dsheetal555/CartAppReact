import React, { useState } from "react";
import "./CartItem.css";
import ModalPopup from "../Modal/Modal";
import { addNewItemApi, updateEachItemApi } from "../../Api/cartItemServiceApi";

const CartItem = (props) => {
  //destructure the props as on required
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cartItem, setCartItem] = useState("");

  const updateItem = (data) => {
    //console.log('about to call the update api call');
    updateEachItemApi(data.id, data).then(() => {
      console.log('update api completed');
    }).catch((error) => {
      console.log(error)
    }).finally(() => {
      props.getItems();
      setModalIsOpen(false);
    });
  }
  const closeModal = () => setModalIsOpen(false)

  const editCartItem = (eachItem) => {
    setCartItem(eachItem);
    setModalIsOpen(true);
  };

  const deleteCartItem = (eachItem) => {
    console.log(eachItem);
  };

  const addNewItem = (addItem) => {
    addNewItemApi(addItem).then(() => {
      console.log('add new item api completed');
    }).catch((error) => {
      console.log(error)
    }).finally(() => {
      props.getItems();
      setModalIsOpen(false);
    });
  }

  return (
    <div className="product-list">
      <button
        onClick={() => {
          setModalIsOpen(true); // make it seperate function
          setCartItem("");
        }}
      >
        Add NewItem
      </button>
      {props.items?.map((item, i) => ( // should use key as a item.id
        <div className="product" key={i}>
          <img src={""} alt={""} />
          <h2>{item.title}</h2>
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
      )
      )}
      {modalIsOpen && (
        <ModalPopup addNewItem={addNewItem} updateItem={updateItem} closeModal={closeModal}
          modalIsOpen={modalIsOpen} cartItem={cartItem}
        />
      )}
    </div>
  );
};

export default CartItem;
