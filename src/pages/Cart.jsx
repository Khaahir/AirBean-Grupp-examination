import React, { useState } from "react";
import Button from "../Componets/Button/Button";
import { Link } from "react-router-dom";
import '../styles/Cart-css/Cart.scss'
const quantity = 0;
export default function Cart({ cart, removeFromCart, setCart }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenCart = () => {
    setIsOpen((prevVal) => !prevVal);
  };

  const calculateTotalPrice = () => {
    let total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
    // Hitta Bryggkaffe och Gustav Adolfsbakelse i varukorgen
    const coffee = cart.find(item => item.title === "Bryggkaffe");
    const cake = cart.find(item => item.title === "Gustav Adolfsbakelse");
  
    // Om det finns exakt 1 Bryggkaffe och 1 Gustav Adolfsbakelse, justera priset
    if (coffee?.quantity >= 1 && cake?.quantity >= 1) {
      // Räkna bort deras ordinarie pris från totalen
      total -= coffee.price * coffee.quantity;
      total -= cake.price * cake.quantity;
  
      // Lägg till 40 kr för dem tillsammans
      total += 40;
    }
  
    return total;
  };
  

  return (
    <>
      <Button onClick={handleOpenCart} variant={"cart"}>
        <img src="src/assets/svg/bag.svg" alt="Cart" />
        <span
          className={
            cart.reduce((total, item) => total + item.quantity, 0) < 1
              ? "hidden"
              : "items-in-Cart"
          }
        >
          {cart.reduce((total, item) => total + item.quantity, 0)}
        </span>
      </Button>

      {isOpen && (
        <section className="cart-container">
          <div className="cart">
            <h1 className="cart-title">Din beställning</h1>
            <ul className="cart-list">
              {cart.map((item, index) => (
                <li key={index} className="cart-item">
                  <span className="cart-item-name">
                    {item.title} : {item.quantity}{" "}
                    <Button
                      variant={"delete"}
                      onClick={() => removeFromCart(item.title)}
                    >
                      ❌
                    </Button>
                  </span>
                  <span className="cart-item-price">
                    {item.price * item.quantity} sek
                  </span>
                </li>
              ))}
            </ul>
            <div className="cart-summary">
              <span className="cart-total">Total</span>
              <span className="cart-total-price">
                <span className="cart-total">{calculateTotalPrice()} kr</span>
              </span>
              <span className="cart-info">inkl moms + drönarleverans</span>
            </div>
            <Button onClick={handleOpenCart} variant={"inCart"}>
              <Link to={"/status"} onClick={() => setCart([])}>
                Take my money!
              </Link>
            </Button>
          </div>
        </section>
      )}
    </>
  );
}
