import { NavLink, Link } from "react-router-dom";
import classes from "./UserNavigation.module.css";

const UserNavigation = ({ onHideHeader }) => {
  return (
    <nav className={classes.nav} onMouseEnter={onHideHeader}>
      <div className={classes.user}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/news-feed">News Feed</NavLink>
          </li>
          <li>
            <NavLink to="/profile">My Profile</NavLink>
          </li>
          <li>
            <NavLink to="/history">F1 History</NavLink>
          </li>
          <Link to="/authentication">
            <button>
              <i className="fa-regular fa-user"></i> SIGN IN
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default UserNavigation;
