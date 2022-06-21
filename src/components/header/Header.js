import classes from "./Header.module.css";
import { useEffect, useState } from "react";
import {
  getCurrentDriversStanding,
  getCurrentYearData,
} from "../../helpers/api/api-drivers";
import HeaderItem from "./HeaderItem";
import { getCurrentSchedule } from "../../helpers/api/api-schedule";

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
      getCurrentDriversStanding(4).then((data) =>
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
      <div className={classes.btn}>
        <button>
          More Info <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
