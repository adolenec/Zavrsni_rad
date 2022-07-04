import Footer from "../components/footer/Footer";
import MainNavigation from "../components/header/MainNavigation";
import RaceDetails from "../components/races/RaceDetails";
import Wrapper from "../components/ui/Wrapper";

const RaceDetailsPage = () => {
  return (
    <>
      <MainNavigation />
      <Wrapper>
        <RaceDetails />
      </Wrapper>
      <Footer />
    </>
  );
};

export default RaceDetailsPage;
