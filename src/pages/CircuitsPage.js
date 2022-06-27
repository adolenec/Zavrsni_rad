import Footer from "../components/footer/Footer";
import MainNavigation from "../components/header/MainNavigation";
import CurrentYearRaces from "../components/races/CurrentYearRaces";
import NextRace from "../components/starting-page/NextRace";
import Wrapper from "../components/ui/Wrapper";

const CircuitsPage = () => {
  return (
    <>
      <MainNavigation />
      <NextRace/>
      <Wrapper>
        <CurrentYearRaces />
      </Wrapper>
      <Footer />
    </>
  );
};

export default CircuitsPage;
