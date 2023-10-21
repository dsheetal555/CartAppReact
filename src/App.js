import { useState } from "react";
import "./App.css";
import CartItem from "./Components/CartItem/CartItem";
import Header from "./Components/Header/Header";
import { useEffect } from "react";
import Loader from "react-js-loader";
import { getAllItemsApi } from "./Api/cartItemServiceApi";
import Pagination from "./Components/Pagination/Pagination";


function App() {
  const [items, setItems] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(2);

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
  const indexOfLastRecord =  currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = items.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(items.length / recordsPerPage)

  console.log(currentPage, indexOfLastRecord, indexOfFirstRecord, currentRecords, nPages)
  return (
    <div>
      <Header />
      {isLoading ? (<Loader type="spinner-circle" bgColor={"black"} title={"spinner-circle"} color={'#FFFFFF'} size={100} />) :
        (items &&
          <>
            <CartItem items={currentRecords} getItems={getItems} />
            <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </>
        )}
    </div>
  );
}

export default App;


// // http://192.168.0.112:3001/api/cart --> GET All Cart Items
// // http://192.168.0.112:3001/api/cart --> POST Add new Item
// // {
// //   "title": "Book1",
// //   "description": "sadsad",
// //   "price" : 32,
// //   "id" : 123
// // }

// // http://192.168.0.112:3001/api/cart/:id --> PUT Update Item
// // params --> id:value

// // http://192.168.0.112:3001/api/cart/:id --> DELETE item
// // params --> id:value