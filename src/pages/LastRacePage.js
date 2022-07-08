import Footer from "../components/footer/Footer";
import MainNavigation from "../components/header/MainNavigation";
import LastRaceResults from "../components/results/LastRaceResults";
import Wrapper from "../components/ui/Wrapper";

const LastRacePage = () => {
  return (
    <>
      <MainNavigation />
      <Wrapper>
        <LastRaceResults/>
      </Wrapper>
      <Footer />
    </>
  );
};

export default LastRacePage;
