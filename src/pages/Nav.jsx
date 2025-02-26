import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "../assets/svg/close.svg?react";
import { menuLinks } from "../Componets/Nav/MenuLinks";
import MenuNav from "../Componets/Nav/MenuNav";
import "../styles/Nav-css/nav.scss";



const Nav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // Gå tillbaka en sida i historiken eller man ockå göra navigate("/"); för att gå till startsidan
    setIsVisible(false); // Dölj navigationsmenyn
  };

  return isVisible && (
    <nav className="nav">
      <img 
        src={CloseIcon} 
        alt="Close" 
        onClick={handleClose} 
        className="close-icon" 
      />
      <section className="links">
        <MenuNav menuLinks={menuLinks} />
      </section>
    </nav>
  );
};

export default Nav;
