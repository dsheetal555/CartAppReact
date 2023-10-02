import React, { useState } from "react";
import Modal from "react-modal";

const ModalPopup = (props) => {
  const [updateItem, setUpdatItem] = useState({
    name: props.cartItem.name,
    price: props.cartItem.price,
    desc: props.cartItem.description,
  });

  const handleOnNameChange = (event) => {
    setUpdatItem({ ...updateItem, name: event.target.value });
  };
  const handlePriceOnChange = (event) => {
    setUpdatItem({ ...updateItem, price: event.target.value });
  };
  const handleDescOnChange = (event) => {
    setUpdatItem({ ...updateItem, desc: event.target.value });
  };
  const updateField = (event) => {
    console.log(event.target.value);
  };
  return (
    <Modal isOpen={props.modalIsOpen} contentLabel="Example Modal">
      <h2>Edit the Fields</h2>
      Item Name :
      <input
        type="text"
        name="name"
        value={updateItem.name}
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
      <button onClick={props.closeModal}>close</button>
      <button onClick={updateField}>{props.cartItem ? 'Update' : 'Add New Item'}</button>
    </Modal>
  );
};

export default ModalPopup;
