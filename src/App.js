import Footer from "./components/footer/Footer";
import MainNavigation from "./components/header/MainNavigation";
import CurrentCalendar from "./components/starting-page/CurrentCalendar";
import CurrentGrid from "./components/starting-page/CurrentGrid";
import NextRace from "./components/starting-page/NextRace";
import RecentRace from "./components/starting-page/RecentRace";

function App() {
  return (
    <>
      <MainNavigation />
      <NextRace/>
      <CurrentGrid/>
      <RecentRace/>
      <CurrentCalendar/>
      <Footer/>
    </>
  );
}

export default App;
