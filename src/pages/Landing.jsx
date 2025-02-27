import "../styles/Landing-css/Landing.scss";
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
