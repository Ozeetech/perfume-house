import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Navbar from "./layout/Navbar";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import { useEffect, useState } from "react";
const cartItemsFromLocalStrogePerf = JSON.parse(localStorage.getItem("cart")) || []
function App() {
  const [cart,setCart] = useState(cartItemsFromLocalStrogePerf);
  const handleAddToCart =(item)=>{
    const isPresent = cart.some((product)=>product.id === item.id)
    if(isPresent){
      const undatedCart = cart.map((product)=>{
        product.id === isHtmlElement.id ? {...product, quantity:product + 1}:product      
      })
    setCart(updatedCart);
  }else{
    const newItem = {...item, quantity:1}
    setCart([...cart,newItem]);
    console.log([...cart,newItem]);
  }

    console.log("added");

  }

// function to remove item
function removeItem (id){
  let remove = cart.filter((cartItx)=> cartItx.id !== id);
  setCart(remove)
}

// calc total price 
const calcTotalPrice = cart.reduce((total,product)=>total + parseFloat(product.price) * product.quantity, 0)
  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart))
  
  },[cart])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Home calcTotalPrice={calcTotalPrice} removeItem ={removeItem} cart={cart} handleAddToCart= {handleAddToCart} setCart={setCart}/>} />
          </Route>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
