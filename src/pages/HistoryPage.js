import { useState } from "react";
import { Switch, useRouteMatch, Route } from "react-router-dom";

import classes from "./HistoryPage.module.css";

import MainNavigation from "../components/header/MainNavigation";
import SelectedYearDrivers from "../components/history/drivers/SelectedYearDrivers";
import HistoryHeader from "../components/history/HistoryHeader";
import SelectFilters from "../components/history/SelectFilters";
import Wrapper from "../components/ui/Wrapper";
import { getCurrentYear } from "../helpers/helper-variables";
import Footer from "../components/footer/Footer";
import SelectedYearCircuits from "../components/history/circuits/SelectedYearCircuits";
import SelectedYearConstructorStandings from "../components/history/constructor-standings/SelectedYearConstructorStandings";
import SelectedYearConstructors from "../components/history/constructors/SelectedYearConstructors";
import SelectedYearDriverStandings from "../components/history/driver-standings/SelectedYearDriverStandings";
import HistoryNavigation from "../components/history/HistoryNavigation";
import TitlesChart from "../components/history/records/TitlesChart";
import ConstructorTitlesChart from "../components/history/records/ConstructorTitlesChart";

const HistoryPage = () => {
  const [selectedYear, setSelectedYear] = useState(getCurrentYear());
  const [selectedCategory, setSelectedCategory] = useState("Drivers");

  let { path } = useRouteMatch();

  return (
    <div className={classes.body}>
      <MainNavigation />
      <HistoryHeader />
      <Wrapper>
        <HistoryNavigation />
        <Switch>
          <Route path={`${path}/general-info`}>
            <SelectFilters
              onSelectYear={setSelectedYear}
              onSelectCategory={setSelectedCategory}
              activeCategory={selectedCategory}
              activeYear={selectedYear}
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
          </Route>
          <Route path={`${path}/records`}>
            <div className={classes.charts}>
              <TitlesChart />
              <div className={classes['test-div']}></div>
              <div className={classes['test-div2']}></div>
              <ConstructorTitlesChart />
            </div>
          </Route>
        </Switch>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default HistoryPage;
