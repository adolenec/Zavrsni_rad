import classes from "./SectionHeader.module.css";
import { Link } from "react-router-dom";

const SectionHeader = ({ title, endpoint }) => {
  return (
    <div className={classes.header}>
      <Link to={`/${endpoint}`}>
        <h1>
          {title} <i className="fa-solid fa-angle-right"></i>
        </h1>
      </Link>
    </div>
  );
};

export default SectionHeader;
