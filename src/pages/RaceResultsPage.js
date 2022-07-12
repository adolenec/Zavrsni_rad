import Footer from "../components/footer/Footer";
import MainNavigation from "../components/header/MainNavigation";
import RaceResults from "../components/results/RaceResults";
import Wrapper from "../components/ui/Wrapper";

const RaceResultsPage = () => {
  return (
    <>
      <MainNavigation />
      <Wrapper>
        <RaceResults/>
      </Wrapper>
      <Footer />
    </>
  );
};

export default RaceResultsPage;
