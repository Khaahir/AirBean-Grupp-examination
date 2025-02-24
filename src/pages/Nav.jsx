import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "../assets/svg/close.svg?react";
import { menuLinks } from "../Componets/Nav/MenuLinks";
import MenuNav from "../Componets/Nav/MenuNav";
import "../styles/Nav-css/nav.scss";

//TODO: QUE JE FAIS?  QUE va se passer qaund je presse le X?

const Nav = () => {
	const [isVisible, setIsVisible] = useState(true);
	const navigate = useNavigate();
	const handleClose = () => {
		//window.history.back();
		//window.close();
		navigate(-1);

		setIsVisible(false);

		console.log("Back to LANDING PAGE");
	};

	return isVisible ? (
		<nav className="nav">
			<img src={CloseIcon} alt="Close" onClick={handleClose} />
			<section className="links">
				<MenuNav menuLinks={menuLinks} />
			</section>
		</nav>
	) : null;
};

export default Nav;
