import StartingPage from "./pages/StartingPage";
import { Route, Switch, Redirect } from "react-router-dom";
import MainNavigation from "./components/header/MainNavigation";
import DriverDetailsPage from "./pages/DriverDetailsPage";
import ConstructorDetailsPage from "./pages/ConstructorDetailsPage";
// import ImageSlider from "./components/ui/ImageSlider";

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
        <MainNavigation/>
      </Route>
      <Route path="/drivers/:driverId">
        <DriverDetailsPage/>
      </Route>
      <Route path="/authentication">
        {/* <ImageSlider/> */}
      </Route>
      <Route path="/constructors" exact></Route>
      <Route path="/constructors/:constructorId">
        <ConstructorDetailsPage/>
      </Route>
      <Route path="/circuits"></Route>
      <Route path="/standings"></Route>
      <Route path="/schedule"></Route>
      <Route path="/history"></Route>
    </Switch>
  );
}

export default App;
