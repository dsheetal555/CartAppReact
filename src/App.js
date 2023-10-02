import "./App.css";
import CartItem from "./Components/CartItem/CartItem";
import Header from "./Components/Header/Header";
import items from "./mock.json";

function App() {
  return (
    <div>
      <Header />
      <CartItem items={items} />
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
