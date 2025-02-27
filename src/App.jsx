import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/style.css";
import Landing from "./pages/Landing";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Status from "./pages/Status";
import Nav from "./pages/Nav";
import NotFound from "./pages/NotFound";
function App() {
  const [cart, setCart] = useState([]);
  const [orderHistory, setOrderHistory] = useState({});

  const addToCart = async (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.title === item.title
      );

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.title === item.title
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });

    const requestBody = {
      details: {
        order: [
          {
            name: item.title,
            price: item.price,
          },
        ],
      },
    };

    try {
      const resp = await fetch(
        "https://airbean-9pcyw.ondigitalocean.app/api/beans/order",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(requestBody),
        }
      );

      if (!resp.ok) {
        const errorResponse = await resp.json();
        console.error("Error response from server:", errorResponse);
        throw new Error("Something went wrong with the POST request!");
      }

      const responseData = await resp.json();
      setOrderHistory(responseData)
      
    } catch (error) {
      console.log("Error in addToCart function:", error);
    }
  };
  

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Cart cart={cart} setCart={setCart} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/menu" element={<Menu addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/status" element={<Status orderHistory={orderHistory} />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
