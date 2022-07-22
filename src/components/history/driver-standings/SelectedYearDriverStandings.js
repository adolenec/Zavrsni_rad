import { useEffect, useState } from "react";
import { getDriversStanding } from "../../../helpers/api/api-drivers";
import SelectedYearDriverStanding from "./SelectedYearDriverStanding";
import classes from "./SelectedYearDriverStandings.module.css";

const SelectedYearDriverStandings = ({ selectedYear }) => {
  const [driverStandings, setDriverStandings] = useState([]);

  useEffect(() => {
    getDriversStanding(selectedYear).then((data) => setDriverStandings(data));
  }, [selectedYear]);

  return (
    <>
      <div className={classes.heading}>
        <p>Position</p>
        <p>Driver</p>
        <p>Constructor</p>
        <p>Points</p>
      </div>
      <div className={classes["driver-standings"]}>
        {driverStandings.map((driver) => (
          <SelectedYearDriverStanding
            key={driver.Driver.driverId}
            info={driver}
          />
        ))}
      </div>
    </>
  );
};

export default SelectedYearDriverStandings;
