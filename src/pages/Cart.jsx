import React, { useState } from "react";
import Button from "../Componets/Button/Button";
const quantity = 0;
export default function Cart({ cart }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenCart = () => {
    setIsOpen((prevVal) => !prevVal);
  };

  return (
    <>
      <Button onClick={handleOpenCart} variant={"cart"}>
        <img src="src/assets/svg/bag.svg" alt="Cart" />
      </Button>

      {isOpen && (
        <section className="cart-container">
          <div className="cart">
            <h1 className="cart-title">Din beställning</h1>
            <ul className="cart-list">
              {cart.map((item, index) => (
                <li key={index} className="cart-item">
                  <span className="cart-item-name">
                    {item.title} : {item.quantity}
                  </span>
                  <span></span>
                  <span className="cart-item-price">
                    {item.price * item.quantity} sek
                  </span>
                </li>
              ))}
            </ul>
            <div className="cart-summary">
              <span className="cart-total">Total</span>
              <span className="cart-total-price">
                <span className="cart-total">
                  {cart.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  )}
                  kr
                </span>
              </span>
              <span className="cart-info">inkl moms + drönarleverans</span>
            </div>
            <Button variant={"inCart"}>Take my money!</Button>
          </div>
        </section>
      )}
    </>
  );
}
