import "../../styles/Button-css/Button.scss";

// skicka variant='cart'om du vill använda det i cart komponenten
// skicka variant='status'om du vill använda det i status sidan

const Button = ({ children, variant, onClick }) => {
  return (
    <button onClick={onClick} className={`button ${variant}`}>
      {children}
    </button>
  );
};

export default Button;
