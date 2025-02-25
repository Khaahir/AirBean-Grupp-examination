import { useState } from "react";
import { useNavigate } from "react-router-dom";
import navicon from "../assets/svg/navicon.svg";
import carticon from "../assets/cart.png";
import "../styles/Header-css/Header.scss";

export default function HeaderBG() {
	const navigate = useNavigate();
	const [isCartOpen, setIsCartOpen] = useState(false);

	const handleNavClick = () => {
		navigate("/nav");
	};

	const handleCartClick = () => {
		navigate("/cart");
		setIsCartOpen(true);
	};

	return (
		<div className="header-container">
			<section className="buttons-container">
				{/* Nav Button */}
				<button onClick={handleNavClick} className="nav-link">
					<img src={navicon} alt="Nav Icon" />
				</button>

				{/* Cart Button */}
				<button onClick={handleCartClick} className="cart-link">
					<img src={carticon} alt="Cart Icon" />
				</button>
			</section>

			{isCartOpen && <Cart setIsOpen={setIsCartOpen} />}
		</div>
	);
}
