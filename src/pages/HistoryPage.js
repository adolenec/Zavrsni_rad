import MainNavigation from "../components/header/MainNavigation";
import HistoryHeader from "../components/history/HistoryHeader";
import SelectYear from "../components/history/SelectYear";
import Wrapper from "../components/ui/Wrapper";
// import Wrapper from "../components/ui/Wrapper";

import classes from './HistoryPage.module.css';

const HistoryPage = () => {

  return (
    <div className={classes.body}>
      <MainNavigation />
      <HistoryHeader/>
      <Wrapper>
        <SelectYear/>
      </Wrapper>
    </div>
  );
};

export default HistoryPage;
