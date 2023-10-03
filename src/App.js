import { useState } from "react";
import "./App.css";
import CartItem from "./Components/CartItem/CartItem";
import Header from "./Components/Header/Header";
import { useEffect } from "react";
//import items from "./mock.json";

function App() {
  const [items, setItems] = useState('')
  const itemList = () => {
    fetch("http://localhost:3001/api/cart").then((response) => response.json()).then((res) => {
      console.log(res)
      setItems(res.data);
    }).catch((error) => {
      console.log(error)
    });
  }
  useEffect(() => {
    itemList();
  }, [])
  return (
    <div>
      <Header />
      {items && <CartItem items={items} />}
    </div>
  );
}

export default App;


// http://192.168.0.112:3001/api/cart --> GET All Cart Items
// http://192.168.0.112:3001/api/cart --> POST Add new Item
// {
//   "title": "Book1",
//   "description": "sadsad",
//   "price" : 32,
//   "id" : 123
// }

// http://192.168.0.112:3001/api/cart/:id --> PUT Update Item
// params --> id:value

// http://192.168.0.112:3001/api/cart/:id --> DELETE item
// params --> id:value
