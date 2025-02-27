import closeIcon from "../assets/svg/close.svg"; // Ensure path is correct
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Nav-css/nav.scss";

function Nav() {
  const navigate = useNavigate();
  const [slide, setSlide] = useState(false);

  function navSlide() {
    setSlide(!slide);
    setTimeout(() => {
      navigate("/"); // Navigate to the Landing page (assuming it's at "/")
    }, 500);
  }

  return (
    <section className={slide ? "flex nav-container slide-out" : "flex nav-container"}>
      <div className="flex close-btn-container">
        <button className="close-btn" onClick={navSlide}>
          <img src={closeIcon} alt="Close" className="close-icon" />
        </button>
      </div>

      <div className="flex menu-btn-container">
        <button className="menu-btn" onClick={() => navigate("/menu")}>Meny</button>
        <div className="border"></div>
        <button className="menu-btn" onClick={() => navigate("/about")}>Vårt kaffe</button>
        <div className="border"></div>
        <button className="menu-btn" onClick={() => navigate("/status")}>Orderstatus</button>
        <div className="border"></div>
      </div>
    </section>
  );
}

export default Nav;