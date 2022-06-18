import MainNavigation from "./components/header/MainNavigation";
import CurrentCalendar from "./components/starting-page/CurrentCalendar";
import CurrentGrid from "./components/starting-page/CurrentGrid";

function App() {
  return (
    <>
      <MainNavigation />
      <CurrentGrid/>
      <CurrentCalendar/>
    </>
  );
}

export default App;
