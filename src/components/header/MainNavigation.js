import classes from "./MainNavigation.module.css";
import logo from "../../images/logo1.jpg";
import { useState } from "react";
import NavigationItem from "./NavigationItem";
import Header from "./Header";
import UserNavigation from "./UserNavigation";

const navTitles = [
  "Drivers",
  "Constructors",
  "Circuits",
  "Standings",
  "Schedule",
];

const MainNavigation = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [apiEndpoint, setApiEndpoint] = useState("");

  const displayHeader = (path) => {
    setShowHeader(true);
    setApiEndpoint(path);
  };

  const hideHeader = () => {
    setShowHeader(false);
    setApiEndpoint("");
  };

  return (
    <div className={classes.header}>
      <UserNavigation onHideHeader={hideHeader} />
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
            {navTitles.map((title) => (
              <NavigationItem
                key={title}
                title={title}
                onShowHeader={displayHeader}
              />
            ))}
          </ul>
        </div>
      </nav>
      {showHeader && (
        <Header endpoint={apiEndpoint} onHideHeader={hideHeader} />
      )}
    </div>
  );
};

export default MainNavigation;
