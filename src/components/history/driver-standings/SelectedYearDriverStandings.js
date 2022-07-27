import { useEffect, useState } from "react";
import { getDriversStanding } from "../../../helpers/api/api-drivers";
import SelectedYearDriverStanding from "./SelectedYearDriverStanding";
import classes from "./SelectedYearDriverStandings.module.css";
import { motion } from "framer-motion";

const SelectedYearDriverStandings = ({ selectedYear }) => {
  const [driverStandings, setDriverStandings] = useState([]);

  useEffect(() => {
    getDriversStanding(selectedYear).then((data) => setDriverStandings(data));
  }, [selectedYear]);

  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 1, type: "spring", bounce: 0.5, delay: .2 }}
      exit={{ y: "100vw" }}
      key="circuits"
    >
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
    </motion.div>
  );
};

export default SelectedYearDriverStandings;
