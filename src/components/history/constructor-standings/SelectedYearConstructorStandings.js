import { useEffect, useState } from "react";
import { getConstructorStandings } from "../../../helpers/api/api-constructors";
import SelectedYearConstructorStanding from "./SelectedYearConstructorStanding";
import classes from "./SelectedYearConstructorStandings.module.css";

const SelectedYearConstructorStandings = ({ selectedYear }) => {
  const [constructorStandings, setConstructorStandings] = useState([]);

  useEffect(() => {
    getConstructorStandings(selectedYear).then((data) => {
      setConstructorStandings(data);
    });
  }, [selectedYear]);

  return (
    <>
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
    </>
  );
};

export default SelectedYearConstructorStandings;
