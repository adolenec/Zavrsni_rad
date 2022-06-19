import MainNavigation from "./components/header/MainNavigation";
import CurrentCalendar from "./components/starting-page/CurrentCalendar";
import CurrentGrid from "./components/starting-page/CurrentGrid";
import NextRace from "./components/starting-page/NextRace";

function App() {
  return (
    <>
      <MainNavigation />
      <NextRace/>
      <CurrentGrid/>
      <CurrentCalendar/>
    </>
  );
}

export default App;
