import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const MenuNav = ({ menuLinks }) => {
    if (!menuLinks || !Array.isArray(menuLinks)) {
        console.error("Menu Links are not available!");
        return <p style={{ color: "red" }}>Menu links are not available</p>;
    }

    return (
        <div>
            <ul className="menu-wrapper">
                {menuLinks.map(({ name, href }) => (
                    <li key={name}>
                        <NavLink to={href}>{name}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

MenuNav.propTypes = {
    menuLinks: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default MenuNav;