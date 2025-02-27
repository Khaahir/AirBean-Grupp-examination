import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Nav-css/nav.scss";
import Button from "../Componets/Button/Button";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavMenu = () => {
    setIsOpen((prevVal) => !prevVal);
  };

  return (
    <>
      <Button onClick={handleNavMenu} variant={"nav"}>
        {isOpen ? (
          <img src="src/assets/svg/close.svg" alt="" />
        ) : (
          <img src="src/assets/svg/navicon.svg" alt="" />
        )}
      </Button>
      {isOpen && (
        <section className="nav-container">
          <section className="nav-box">
            <Link className="menu-text" onClick={handleNavMenu} to="/menu">
              <span>Meny</span>
            </Link>
            <Link className="menu-text" onClick={handleNavMenu} to="/about">
              <span>Vårt kaffe</span>
            </Link>
            <Link className="menu-text" onClick={handleNavMenu} to="/status">
              <span className="menu-text">Orderstatus</span>
            </Link>
          </section>
        </section>
      )}
    </>
  );
}
export default Nav;
