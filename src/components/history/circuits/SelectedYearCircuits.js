import classes from "./SelectedYearCircuits.module.css";
import { useEffect, useState } from "react";
import { getSchedule } from "../../../helpers/api/api-schedule";
import SelectedYearCircuit from "./SelectedYearCircuit";

const SelectedYearCircuits = ({ selectedYear }) => {
  const [circuits, setCircuits] = useState([]);

  useEffect(() => {
    getSchedule(selectedYear).then((data) => setCircuits(data));
  }, [selectedYear]);

  return (
    <>
      <div className={classes.heading}>
        <p>Round</p>
        <p>Race</p>
        <p>Circuit</p>
        <p>Country</p>
      </div>
      <div className={classes.circuits}>
        {circuits.map((circuit) => (
          <SelectedYearCircuit key={circuit.Circuit.circuitId} info={circuit} />
        ))}
      </div>
    </>
  );
};

export default SelectedYearCircuits;
