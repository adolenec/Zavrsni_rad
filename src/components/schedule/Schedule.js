import { useEffect, useState } from "react";
import { getCurrentSchedule } from "../../helpers/api/api-schedule";
import CurrentYearItem from "../starting-page/CurrentYearItem";
import classes from "./Schedule.module.css";

const Schedule = () => {
  const [upcomingRaces, setUpcomingRaces] = useState([]);
  const todayDate = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    getCurrentSchedule().then((data) => {
      let upcomingDataArray = [];
      for (const key in data) {
        if (data[key].date >= todayDate) {
          upcomingDataArray.push({ ...data[key] });
        }
      }
      setUpcomingRaces(upcomingDataArray);
    });
  }, [todayDate]);

  console.log(upcomingRaces);

  return (
    <>
      <div className={classes.title}>
        <h1>Upcoming Races</h1>
      </div>
      <div className={classes["previous-races"]}>
        {upcomingRaces.map((race) => (
          <CurrentYearItem
            currentYearData={race}
            endpoint="schedule"
            key={race.Circuit.circuitId}
          />
        ))}
      </div>
      <div className={classes["upcoming-races"]}></div>
    </>
  );
};

export default Schedule;
