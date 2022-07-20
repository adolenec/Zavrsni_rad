import React from "react";
import { getCurrentYear } from "../../helpers/helper-variables";
import classes from "./SelectYear.module.css";

const SelectYear = () => {
  const currentYear = getCurrentYear();
  const years = [...Array(currentYear - 1950 + 1).keys()]
    .map((x) => x + 1950)
    .reverse();

  const selectYear = (i) => {
    console.log(years[i]);
    //pass year to function to fetch data for selected year
  };

  return (
    <div className={classes["years-container"]}>
      <h3>Select year</h3>
      <div className={classes.years}>
        {years.map((year, i) => (
          <p key={year} onClick={() => selectYear(i)}>
            {year}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SelectYear;
