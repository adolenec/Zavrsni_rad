import { useEffect, useState } from "react";
import { getConstructors } from "../../../helpers/api/api-constructors";
import classes from "./SelectedYearConstructors.module.css";
import SelectedYearConstructor from "./SelectedYearConstructor";
import { motion } from "framer-motion";

const SelectedYearConstructors = ({ selectedYear }) => {
  const [constructors, setConstructors] = useState([]);

  useEffect(() => {
    getConstructors(selectedYear).then((data) => setConstructors(data));
  }, [selectedYear]);

  console.log(constructors);
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 1, type: "spring", bounce: 0.5, delay: .2 }}
      exit={{ y: "100vw" }}
      key="circuits"
    >
      <div className={classes.heading}>
        <p>Name</p>
        <p>Nationality</p>
      </div>
      <div className={classes.constructors}>
        {constructors.map((constructor) => (
          <SelectedYearConstructor
            key={constructor.constructorId}
            info={constructor}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SelectedYearConstructors;
