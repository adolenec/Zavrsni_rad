import classes from "./SelectedYearCircuits.module.css";
import { useEffect, useState } from "react";
import { getSchedule } from "../../../helpers/api/api-schedule";
import SelectedYearCircuit from "./SelectedYearCircuit";
import { motion } from "framer-motion";

const SelectedYearCircuits = ({ selectedYear }) => {
  const [circuits, setCircuits] = useState([]);

  useEffect(() => {
    getSchedule(selectedYear).then((data) => setCircuits(data));
  }, [selectedYear]);

  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 1, type: "spring", bounce: 0.5, delay: 0.2 }}
      exit={{ y: "100vw" }}
      key="circuits"
    >
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
    </motion.div>
  );
};

export default SelectedYearCircuits;
