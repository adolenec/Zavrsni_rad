import classes from "./Header.module.css";
import { useEffect, useState } from "react";
import {
  getCurrentYearData,
  getDriversStanding,
} from "../../helpers/api/api-drivers";
import HeaderItem from "./HeaderItem";
import { getCurrentSchedule } from "../../helpers/api/api-schedule";
import { getCurrentYear } from "../../helpers/helper-variables";

const Header = (props) => {
  const [currentYearData, setCurrentYearData] = useState([]);
  const [currentDriversStanding, setCurrentDriversStanding] = useState([]);
  const [currentSchedule, setCurrentSchedule] = useState([]);

  useEffect(() => {
    if (
      props.endpoint === "drivers" ||
      props.endpoint === "constructors" ||
      props.endpoint === "circuits"
    ) {
      getCurrentYearData(props.endpoint).then((data) =>
        setCurrentYearData(data)
      );
    }

    if (props.endpoint === "standings") {
      getDriversStanding(getCurrentYear(), 4).then((data) =>
        setCurrentDriversStanding(data)
      );
    }

    if (props.endpoint === "schedule") {
      getCurrentSchedule().then((data) => setCurrentSchedule(data));
    }
  }, [props.endpoint]);

  let headerData;

  if (
    props.endpoint === "drivers" ||
    props.endpoint === "constructors" ||
    props.endpoint === "circuits"
  ) {
    headerData = currentYearData;
  } else if (props.endpoint === "standings") {
    headerData = currentDriversStanding;
  } else if (props.endpoint === "schedule") {
    headerData = currentSchedule;
  }

  if (headerData.message) {
    return (
      <div className={classes.header} onMouseLeave={props.onHideHeader}>
        Couldn't load data
      </div>
    );
  }

  return (
    <div className={classes.header} onMouseLeave={props.onHideHeader}>
      {headerData.map((data) => (
        <HeaderItem
          key={[data.url, data.position]}
          headerData={data}
          endpoint={props.endpoint}
        />
      ))}
    </div>
  );
};

export default Header;
