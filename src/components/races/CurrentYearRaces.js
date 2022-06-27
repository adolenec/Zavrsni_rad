import classes from "./CurrentYearRaces.module.css";
import { getCurrentYear } from "../../helpers/helper-variables";
import CurrentYearItem from "../starting-page/CurrentYearItem";
import { useEffect, useState } from "react";
import { getCurrentSchedule } from "../../helpers/api/api-schedule";

const currentYear = getCurrentYear();

const CurrentYearRaces = () => {
    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        getCurrentSchedule().then(data=> setSchedule(data));
    }, [])

  return (
    <div className={classes.calendar}>
      <div className={classes.title}>
        <h1>{currentYear} Circuits</h1>
      </div>
      <div className={classes.circuits}>
      {schedule.map((race) => (
          <CurrentYearItem
            key={race.Circuit.circuitId}
            currentYearData={race}
            endpoint="circuits"
          />
        ))}
      </div>
    </div>
  );
};

export default CurrentYearRaces;
