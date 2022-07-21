import React, { useState } from "react";
import { getCurrentYear } from "../../helpers/helper-variables";
import classes from "./SelectYear.module.css";

const SelectYear = ({ onSelectYear }) => {
  const currentYear = getCurrentYear();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const years = [...Array(currentYear - 1950 + 1).keys()]
    .map((x) => x + 1950)
    .reverse();

  const selectYear = (i) => {
    setSelectedIndex(i);
    onSelectYear(years[i]);
  };

  return (
    <div className={classes["years-container"]}>
      <h3>
        Select year <i className="fa-solid fa-angle-right"></i>
      </h3>
      <div className={classes.years}>
        {years.map((year, i) => (
          <p
            key={year}
            onClick={() => selectYear(i)}
            style={{
              backgroundColor: i === selectedIndex && "#ccc",
              color: i === selectedIndex && "rgb(225, 0, 0)",
            }}
          >
            {year}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SelectYear;
