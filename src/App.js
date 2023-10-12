import { useState } from "react";
import "./App.css";
import CartItem from "./Components/CartItem/CartItem";
import Header from "./Components/Header/Header";
import { useEffect } from "react";
import Loader from "react-js-loader";
import { getAllItemsApi } from "./Api/cartItemServiceApi";

function App() {
  const [items, setItems] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const getItems = () => {
    //console.log('about to call the getAllItem api call');
    setIsLoading(true)
    getAllItemsApi().then((res) => {
      //console.log('getAllItem api completed',res.data);
      setItems(res.data);
      setIsLoading(false);
    }).catch((error) => {
      console.log(error)
      setIsLoading(false);
    });
  }
  useEffect(() => {
    getItems();
  }, [])
  return (
    <div>
      <Header />
      {isLoading ? (<Loader type="spinner-circle" bgColor={"black"} title={"spinner-circle"} color={'#FFFFFF'} size={100} />) :
        (items && <CartItem items={items} getItems={getItems} />)}
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
