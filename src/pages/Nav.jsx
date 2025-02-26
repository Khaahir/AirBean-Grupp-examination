import React, { useState, useEffect } from "react";
import CloseIcon from "../assets/svg/close.svg?react";
import { menuLinks } from "../Componets/Nav/MenuLinks";
import MenuNav from "../Componets/Nav/MenuNav";
import { useNavigate } from "react-router-dom";
import "../styles/Nav-css/nav.scss";

/*TODO: 
Optimerat klassen - use state 
Click on close Icon -> gets to the home page (/)
prob: humberger menu should be in the landing page so there will be interaction as button? 
Je dois egalement citer si je vais incorporer / cart et d'autre menu*/

const Nav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();


  // Use useEffect
  useEffect(() => {
    const savedVisibility = localStorage.getItem("navVisibility");
    if (savedVisibility) {
      setIsVisible(JSON.parse(savedVisibility));
    }
  }, []);

  // Apporter du localStorage
  const handleClose = () => {
    navigate(-1); // Gå tillbaka en sida i historiken eller man ockå göra navigate("/"); för att gå till startsidan
    setIsVisible(false); // Dölj navigationsmenyn
    setIsVisible(false);
    localStorage.setItem("navVisibility", JSON.stringify(false));

    console.log("Nav est FERMÉE..........");
    // PAGE PRINCIPAlE
    navigate("/");
  };

  return isVisible && (
    <nav className="nav">
      <img 
        src={CloseIcon} 
        alt="Close" 
        onClick={handleClose} 
        className="close-icon" 
      />
  return (
    <nav className={`nav ${isVisible ? "visible" : "hidden"}`}>
      <button
        className="close-button"
        onClick={handleClose}
        aria-label="Close menu"
      >
        <img src={CloseIcon} alt="Close" />
      </button>

      <section className="links">
        <MenuNav menuLinks={menuLinks} />
      </section>
    </nav>
  );
  );
};

export default Nav;
