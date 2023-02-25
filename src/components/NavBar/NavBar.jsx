import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import css from "./navBar.module.css";

import navItems from "./navItems";

const NavBar = () => {
    const elem = navItems.map(({ id, title, link }) =>
        <li key={id}>
            <NavLink className={css.link} to={link}>{title }</NavLink>
        </li>)
    return (
        <ul className={css.menu}>
            {elem}
       </ul>
   )
}

export default NavBar;

NavBar.defaultProps = {
    navItems: []
}
 
NavBar.propTypes = {
    navItems: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            link: PropTypes.string.isRequired,
            })) 
};