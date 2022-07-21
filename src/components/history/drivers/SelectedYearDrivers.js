import { useEffect, useState } from "react";
import { getSelectedYearDrivers } from "../../../helpers/api/api-drivers";
import SelectedYearDriver from "./SelectedYearDriver";
import classes from "./SelectedYearDrivers.module.css";

const SelectedYearDrivers = ({ selectedYear }) => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    getSelectedYearDrivers(selectedYear).then((data) => {
      setDrivers(data);
    });
  }, [selectedYear]);

  return (
    <>
      <div className={classes.heading}>
        <p>Name</p>
        <p>Date of Birth</p>
        <p>Nationality</p>
        <p>Number</p>
      </div>
      <div className={classes.drivers}>
        {drivers.map((driver) => {
          return <SelectedYearDriver key={driver.driverId} info={driver} />;
        })}
      </div>
      <p style={{ marginTop: ".4rem", color: "#ccc", fontSize: ".6rem" }}>
        *Note: Only drivers that have participated in the 2014 season onwards
        have permanent number
      </p>
    </>
  );
};

export default SelectedYearDrivers;
