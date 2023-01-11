import React,{useState} from "react";
import "./App.css";
import HomeContainer from "./Component/HomeContainer";
import Navbar from "./Component/Navbar";
import Cart from "./Component/Cart";

function App() {
  const [show, setShow] = useState(true)
  const [cart, setCart] = useState([])
  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  return (
    <>
      <Navbar setShow={setShow} size={cart.length}/>
      <h2 className="h">Welcome To Delicious Thali App</h2>
      <h4 className="h">Thali's</h4>
      {show?<HomeContainer handleClick={handleClick}/>: (
          <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
        )}     
    </>
  );
}

export default App;
