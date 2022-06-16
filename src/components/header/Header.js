import classes from "./Header.module.css";
import { useEffect, useState } from "react";
import { getCurrentYearData } from "../../helpers/api/api-drivers";

const Header = (props) => {
  const [currentYearData, setCurrentYearData] = useState([]);

  useEffect(() => {
    getCurrentYearData(props.endpoint).then((data) => setCurrentYearData(data));
  }, [props.endpoint]);

  console.log(currentYearData);

  return (
    <div className={classes.header} onMouseLeave={props.onHideHeader}>
      {currentYearData.map((data) => (
        <p key={data.driverId}>
          {data.name} {data.givenName} {data.familyName} {data.circuitName}
        </p>
      ))}
    </div>
  );
};

export default Header;
