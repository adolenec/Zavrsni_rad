import { useState } from "react";
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
import classes from "./HistoryPage.module.css";
import { Switch, useRouteMatch, Route } from "react-router-dom";
import HistoryNavigation from "../components/history/HistoryNavigation";
// import { getDriverWinners } from "../helpers/api/api-results";

const HistoryPage = () => {
  const [selectedYear, setSelectedYear] = useState(getCurrentYear());
  const [selectedCategory, setSelectedCategory] = useState("Drivers");

  let { path, url } = useRouteMatch();

  //Move commented code into separate component later!!

  // useEffect(() => {
  //   let array = [];
  //   getDriverWinners().then((data) => {
  //     console.log(data);
  //     for (const key in data) {
  //       console.log(data[key]);
  //       array.push({name: key, titles: data[key]});
  //       console.log(key)
  //       console.log(data[key]);
  //     }
  //   });
  //   console.log(array);
  // });

  console.log(path, url);

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
        </Switch>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default HistoryPage;
