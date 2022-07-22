import { useEffect, useState } from "react";
import { getConstructors } from "../../../helpers/api/api-constructors";
import classes from "./SelectedYearConstructors.module.css";
import SelectedYearConstructor from "./SelectedYearConstructor";

const SelectedYearConstructors = ({ selectedYear }) => {
  const [constructors, setConstructors] = useState([]);

  useEffect(() => {
    getConstructors(selectedYear).then((data) => setConstructors(data));
  }, [selectedYear]);

  console.log(constructors);
  return (
    <>
      <div className={classes.heading}>
        <p>Name</p>
        <p>Nationality</p>
      </div>
      <div className={classes.constructors}>
        {constructors.map(constructor => (
            <SelectedYearConstructor key={constructor.constructorId} info={constructor}/>
        ))}
      </div>
    </>
  );
};

export default SelectedYearConstructors;
