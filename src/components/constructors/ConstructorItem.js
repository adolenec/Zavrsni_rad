import { Link } from "react-router-dom";
import classes from "./ConstructorItem.module.css";

const ConstructorItem = ({ constructor }) => {
  return (
    <div className={classes["constructor-item"]} style={{backgroundColor: constructor.color}}>
      <Link to={`/constructors/${constructor.constructorId}`}>
        <div className={classes.header}>
          <h2>{constructor.name}</h2>
          <div className={classes["nationality-image"]}>
            <img
              src={constructor.nationalityImage}
              alt={constructor.nationality}
            />
          </div>
        </div>
        <div className={classes.main}>
          <div className={classes.logo}>
            <img
              src={constructor.constructorImage}
              alt={constructor.constructorId}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ConstructorItem;
