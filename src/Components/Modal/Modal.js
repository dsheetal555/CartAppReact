import React, { useState } from "react";
import Modal from "react-modal";

const ModalPopup = (props) => {
  const [updateItem, setUpdatItem] = useState({
    title: props.cartItem.title,
    price: props.cartItem.price,
    desc: props.cartItem.description,
    id: props.cartItem.id
  });

  const handleOnNameChange = (event) => {
    setUpdatItem({ ...updateItem, title: event.target.value });
  };
  const handlePriceOnChange = (event) => {
    setUpdatItem({ ...updateItem, price: event.target.value });
  };
  const handleDescOnChange = (event) => {
    setUpdatItem({ ...updateItem, desc: event.target.value });
  };
  const updateField = (data) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetch('http://localhost:3001/api/cart/' + data.id, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data)
      }).catch((error) => {
        console.log(error)
      });;
    props.closeModal();
  };
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
      <button onClick={props.closeModal}>close</button>
      <button onClick={res => updateField(updateItem)}>{props.cartItem ? 'Update' : 'Add New Item'}</button>
    </Modal>
  );
};

export default ModalPopup;
