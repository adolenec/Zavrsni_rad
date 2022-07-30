import React, { useState } from "react";
import { getCurrentYear } from "../../helpers/helper-variables";
import classes from "./SelectFilters.module.css";

const SelectYear = ({
  onSelectYear,
  onSelectCategory,
  activeCategory,
  activeYear,
}) => {
  const currentYear = getCurrentYear();

  const years = [...Array(currentYear - 1950 + 1).keys()]
    .map((x) => x + 1950)
    .reverse();

  const activeYearIndex = years.findIndex((year) => year === activeYear);
  console.log(activeYearIndex);

  const [selectedIndex, setSelectedIndex] = useState(activeYearIndex);
  const [selectedCategory, setSelectedCategory] = useState(activeCategory);

  const category = [
    "Drivers",
    "Constructors",
    "Circuits",
    "Driver Standings",
    "Constructor Standings",
  ];

  const selectYear = (i) => {
    setSelectedIndex(i);
    onSelectYear(years[i]);
  };

  const selectCategory = (item) => {
    setSelectedCategory(item);
    onSelectCategory(item);
  };

  return (
    <div className={classes["years-container"]}>
      <h3>
        Select Filters <i className="fa-solid fa-angle-right"></i>
      </h3>
      <div className={classes.years}>
        {years.map((year, i) => (
          <p
            key={year}
            onClick={() => selectYear(i)}
            style={{
              backgroundColor: i === selectedIndex && "#ccc",
              color: i === selectedIndex && "rgb(225, 0, 0)",
              fontWeight: i === selectedIndex && "bold",
            }}
          >
            {year}
          </p>
        ))}
      </div>
      <div className={classes.category}>
        {category.map((item) => (
          <p
            key={item}
            onClick={() => selectCategory(item)}
            style={{
              backgroundColor: item === selectedCategory && "#ccc",
              color: item === selectedCategory && "rgb(225, 0, 0)",
              fontWeight: item === selectedCategory && "bold",
            }}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SelectYear;
