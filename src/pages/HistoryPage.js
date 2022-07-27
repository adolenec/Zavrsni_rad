import { useState } from "react";
import MainNavigation from "../components/header/MainNavigation";
import SelectedYearDrivers from "../components/history/drivers/SelectedYearDrivers";
import HistoryHeader from "../components/history/HistoryHeader";
import SelectFilters from "../components/history/SelectFilters";
import Wrapper from "../components/ui/Wrapper";
import { getCurrentYear } from "../helpers/helper-variables";
import Footer from '../components/footer/Footer';

import SelectedYearCircuits from "../components/history/circuits/SelectedYearCircuits";
import SelectedYearConstructorStandings from "../components/history/constructor-standings/SelectedYearConstructorStandings";
import SelectedYearConstructors from "../components/history/constructors/SelectedYearConstructors";
import SelectedYearDriverStandings from "../components/history/driver-standings/SelectedYearDriverStandings";
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
        {selectedCategory === "Constructors" && (
          <SelectedYearConstructors selectedYear={selectedYear} />
        )}
        {selectedCategory === "Driver Standings" && (
          <SelectedYearDriverStandings selectedYear={selectedYear} />
        )}
        {selectedCategory === "Constructor Standings" && (
          <SelectedYearConstructorStandings selectedYear={selectedYear} />
        )}
        {selectedCategory === "Circuits" && (
          <SelectedYearCircuits selectedYear={selectedYear} />
        )}      
      </Wrapper>
      <Footer/>
    </div>
  );
};

export default HistoryPage;
