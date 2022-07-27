import { useEffect, useState } from "react";
import { getConstructorStandings } from "../../../helpers/api/api-constructors";
import SelectedYearConstructorStanding from "./SelectedYearConstructorStanding";
import classes from "./SelectedYearConstructorStandings.module.css";
import { motion } from "framer-motion";

const SelectedYearConstructorStandings = ({ selectedYear }) => {
  const [constructorStandings, setConstructorStandings] = useState([]);

  useEffect(() => {
    getConstructorStandings(selectedYear).then((data) => {
      setConstructorStandings(data);
    });
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
        <p>Constructor</p>
        <p>Points</p>
      </div>
      <div className={classes["constructor-standings"]}>
        {constructorStandings.map((constructor) => (
          <SelectedYearConstructorStanding
            key={constructor.Constructor.constructorId}
            info={constructor}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SelectedYearConstructorStandings;
