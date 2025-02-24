import { useNavigate } from "react-router-dom";
import "../styles/Landing-css/Landing.scss";
import leftImg from "../assets/header-left.svg";
import rightImg from "../assets/header-right.svg";
import logo from "../assets/svg/logo.svg";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <section className="landing-container" onClick={() => navigate("/menu")}>
      <article className="landing-left">
        <img src={leftImg} />
      </article>

      <article className="landing-center">
        <img src={logo} />
        <h1>AIR BEAN</h1>
        <p>DRONEDELIVERED COFFEE </p>
      </article>

      <article className="landing-right">
        <img src={rightImg} />
      </article>
    </section>
  );
};

export default Landing;
