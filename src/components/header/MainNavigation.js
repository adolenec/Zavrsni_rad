import classes from "./MainNavigation.module.css";
import logo from "../../images/logo1.jpg";

const MainNavigation = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <ul>
          <li>
            <img src={logo} alt="Logo" />
          </li>
        </ul>
      </div>
      <div className={classes.items}>
        <ul>
          <li>Drivers <i className="fa-solid fa-angle-down"></i></li>
          <li>Constructors <i className="fa-solid fa-angle-down"></i></li> 
          <li>Circuits <i className="fa-solid fa-angle-down"></i></li>
          <li>Standings</li>
          <li>Schedule <i className="fa-solid fa-angle-down"></i></li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNavigation;
