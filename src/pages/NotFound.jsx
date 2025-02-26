import { useEffect } from "react";
import "../styles/NotFound-css/NotFound.scss";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/menu");
    }, 2000);
  }, []);
  return <div className="notFoundContainer">Not Found</div>;
};

export default NotFound;
