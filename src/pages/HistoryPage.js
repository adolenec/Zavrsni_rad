import MainNavigation from "../components/header/MainNavigation";
import SelectedYearDrivers from "../components/history/drivers/SelectedYearDrivers";
import HistoryHeader from "../components/history/HistoryHeader";
import Wrapper from "../components/ui/Wrapper";

import classes from './HistoryPage.module.css';

const HistoryPage = () => {

  return (
    <div className={classes.body}>
      <MainNavigation />
      <HistoryHeader/>
      <Wrapper>
        <SelectedYearDrivers/>
      </Wrapper>
    </div>
  );
};

export default HistoryPage;
