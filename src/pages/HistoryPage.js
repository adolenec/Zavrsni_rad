import MainNavigation from "../components/header/MainNavigation";
import SelectedYearDrivers from "../components/history/drivers/SelectedYearDrivers";
import HistoryHeader from "../components/history/HistoryHeader";
import SelectFilters from "../components/history/SelectFilters";
import Wrapper from "../components/ui/Wrapper";
import { useState } from "react";
import { getCurrentYear } from "../helpers/helper-variables";

import classes from "./HistoryPage.module.css";

const HistoryPage = () => {
  const [selectedYear, setSelectedYear] = useState(getCurrentYear());
  const [selectedCategory, setSelectedCategory] = useState("Drivers");

  console.log(selectedYear);
  console.log(selectedCategory);

  return (
    <div className={classes.body}>
      <MainNavigation />
      <HistoryHeader />
      <Wrapper>
        <SelectFilters
          onSelectYear={setSelectedYear}
          onSelectCategory={setSelectedCategory}
        />
        {selectedCategory === "Drivers" && (
          <SelectedYearDrivers selectedYear={selectedYear} />
        )}
      </Wrapper>
    </div>
  );
};

export default HistoryPage;
