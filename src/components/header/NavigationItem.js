import { NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css';

const NavigationItem = ({ title, onShowHeader }) => {
  const route = title.toLowerCase();

  const displayHeader = () => {
    onShowHeader(title.toLowerCase());
  };

  return (
    <li onMouseEnter={displayHeader}>
      <NavLink activeClassName={classes.active} to={`/${route}`}>
        {title}
        <i className="fa-solid fa-angle-down"></i>
      </NavLink>
    </li>
  );
};

export default NavigationItem;
