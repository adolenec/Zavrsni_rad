import StartingPage from "./pages/StartingPage";
import { Route, Switch, Redirect } from "react-router-dom";
import DriverDetailsPage from "./pages/DriverDetailsPage";
import ConstructorDetailsPage from "./pages/ConstructorDetailsPage";
import CircuitsPage from "./pages/CircuitsPage";
import RaceDetailsPage from "./pages/RaceDetailsPage";
import DriversPage from "./pages/DriversPage";
import ConstructorsPage from "./pages/ConstructorsPage";
import StandingsPage from "./pages/StandingsPage";
import SchedulePage from "./pages/SchedulePage";
import RaceResultsPage from "./pages/RaceResultsPage";
import HistoryPage from "./pages/HistoryPage";
// import ImageSlider from "./components/ui/ImageSlider";
// import { driversImages } from "./helpers/image-arrays/drivers-images";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/starting-page" />
      </Route>
      <Route path="/starting-page">
        <StartingPage />
      </Route>
      <Route path="/drivers" exact>
        <DriversPage/>
      </Route>
      <Route path="/drivers/:driverId">
        <DriverDetailsPage/>
      </Route>
      <Route path="/authentication">
        {/* <ImageSlider imageArray={driversImages} delay={2000}/> */}
      </Route>
      <Route path="/constructors" exact>
        <ConstructorsPage/>
      </Route>
      <Route path="/constructors/:constructorId">
        <ConstructorDetailsPage/>
      </Route>
      <Route path="/circuits" exact>
        <CircuitsPage/>
      </Route>
      <Route path="/circuits/:circuitId" exact>
        <RaceDetailsPage/>
      </Route>
      <Route path="/results/:round">
        <RaceResultsPage/>
      </Route>
      <Route path="/standings">
        <StandingsPage/>
      </Route>
      <Route path="/schedule">
        <SchedulePage/>
      </Route>
      <Route path="/history">
        <HistoryPage/>
      </Route>
    </Switch>
  );
}

export default App;
