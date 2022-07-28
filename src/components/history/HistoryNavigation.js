import { NavLink, useRouteMatch } from "react-router-dom";
import classes from "./HistoryNavigation.module.css";

const HistoryNavigation = () => {
  let { path } = useRouteMatch();

  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink activeClassName={classes.active} to={`${path}/general-info`}>
            <div className={classes.general}>
              <div className={classes["general-image"]}>
                <div>
                  <h2>General Information</h2>
                  <p>
                    Drivers, Constructors, Driver Standings, Constructor
                    Standings and Circuits
                  </p>
                </div>
              </div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to={`${path}/records`}>
            <div className={classes.records}>
              <div className={classes.image}>
                <h2>Records</h2>
              </div>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HistoryNavigation;
