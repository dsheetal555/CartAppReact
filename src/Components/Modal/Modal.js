import React, { useState } from "react";
import Modal from "react-modal";

const ModalPopup = (props) => {
  const [updateItem, setUpdatItem] = useState({
    title: props.cartItem.title,
    price: props.cartItem.price,
    description: props.cartItem.description,
    id: props.cartItem.id
  });

  const handleOnNameChange = (event) => {
    setUpdatItem({ ...updateItem, title: event.target.value });
  };
  const handlePriceOnChange = (event) => {
    setUpdatItem({ ...updateItem, price: event.target.value });
  };
  const handleDescOnChange = (event) => {
    setUpdatItem({ ...updateItem, description: event.target.value });
  };

  const handleIdOnChange = (event) => {
    setUpdatItem({ ...updateItem, id: event.target.value });
  }

  return (
    <Modal isOpen={props.modalIsOpen} contentLabel="Example Modal">
      <h2>Edit the Fields</h2>
      Item title :
      <input
        type="text"
        name="name"
        value={updateItem.title}
        onChange={handleOnNameChange}
      />
      <br />
      Price :
      <input
        type="text"
        name="price"
        value={updateItem.price}
        onChange={handlePriceOnChange}
      />
      <br />
      Description :
      <input
        type="text"
        name="price"
        value={updateItem.desc}
        onChange={handleDescOnChange}
      />
      <br />
      Id :
      <input
        type="text"
        name="price"
        value={updateItem.id}
        onChange={handleIdOnChange}
      />
      <br />
      <button onClick={props.closeModal}>close</button>
      <button onClick={() => props.cartItem ? props.updateItem(updateItem) : props.addNewItem(updateItem)}>{props.cartItem ? 'Update' : 'Add New Item'}</button>
    </Modal>
  );
};

export default ModalPopup;
