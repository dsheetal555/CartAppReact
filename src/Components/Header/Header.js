import React, {useState} from "react";
import "./Header.css";

const Header = () => {
  const [searchItem, setSearchItem] = useState("");
  const onSearch = (event) => {
    setSearchItem(event.target.value);
  };
  return (
    <div>
      <header className="App-header">
        <h1>Welcome to Shopping Cart</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for Cart Products..."
            value={searchItem}
            onChange={onSearch}
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
