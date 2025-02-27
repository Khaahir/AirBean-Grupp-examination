import "../styles/Landing-css/Landing.scss";
import leftImg from "../assets/header-left.svg";
import rightImg from "../assets/header-right.svg";
import logo from "../assets/svg/logo.svg";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <section
      className="landing-container"
      onClick={() => navigate("/menu")}
    ></section>
  );
};

export default Landing;
