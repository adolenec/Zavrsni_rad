import Footer from "../components/footer/Footer";
import MainNavigation from "../components/header/MainNavigation";
import ConstructorStandings from "../components/results/standings/ConstructorStandings";
import DriverStandings from "../components/results/standings/DriverStandings";
import Wrapper from "../components/ui/Wrapper";

const StandingsPage = () => {
  return (
    <>
      <MainNavigation />
      <Wrapper>
        <DriverStandings />
        <ConstructorStandings />
      </Wrapper>
      <Footer></Footer>
    </>
  );
};

export default StandingsPage;
