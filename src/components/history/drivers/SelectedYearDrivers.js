import { useEffect, useState } from "react";
import { getSelectedYearDrivers } from "../../../helpers/api/api-drivers";
import { getCurrentYear } from "../../../helpers/helper-variables";
import SelectYear from "../SelectYear";
import SelectedYearDriver from "./SelectedYearDriver";
import classes from "./SelectedYearDrivers.module.css";

const SelectedYearDrivers = () => {
  const [selectedYear, setSelectedYear] = useState(getCurrentYear());
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    getSelectedYearDrivers(selectedYear).then((data) => {
      setDrivers(data);
    });
  }, [selectedYear]);

  console.log(selectedYear);
  console.log(drivers);

  return (
    <>
      <SelectYear onSelectYear={setSelectedYear} />
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
