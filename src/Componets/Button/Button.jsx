import "../../styles/Button-css/Button.scss";

const Button = ({ text, variant }) => {
  return <button className={`button ${variant}`}>{text}</button>;
};

export default Button;
