import "../../styles/Button-css/Button.scss";

// skicka variant='cartbtn'om du vill använda det i cart komponenten
// skicka variant='statusbtn'om du vill använda det i status sidan

const Button = ({ children, variant, onClick }) => {
  return (
    <button onClick={onClick} className={`button-${variant}`}>
      {children}
    </button>
  );
};

export default Button;
