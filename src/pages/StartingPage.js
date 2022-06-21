import MainNavigation from "../components/header/MainNavigation";
import CurrentCalendar from "../components/starting-page/CurrentCalendar";
import CurrentGrid from "../components/starting-page/CurrentGrid";
import NextRace from "../components/starting-page/NextRace";
import RecentRace from "../components/starting-page/RecentRace";
import Footer from "../components/footer/Footer";

const StartingPage = () => {
  return (
    <>
      <MainNavigation />
      <NextRace />
      <CurrentGrid />
      <RecentRace />
      <CurrentCalendar />
      <Footer />
    </>
  );
};

export default StartingPage;
