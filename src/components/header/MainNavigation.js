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
          <li>Drivers</li>
          <li>Teams</li>
          <li>Circuits</li>
          <li>Standings</li>
          <li>Schedule</li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNavigation;
