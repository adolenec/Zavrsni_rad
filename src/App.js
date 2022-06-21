import StartingPage from "./pages/StartingPage";
import { Route, Switch, Redirect } from "react-router-dom";
import MainNavigation from "./components/header/MainNavigation";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/starting-page" />
      </Route>
      <Route path="/starting-page">
        <StartingPage />
      </Route>
      <Route path="/drivers">
        <MainNavigation/>
      </Route>
      <Route path="/constructors"></Route>
      <Route path="/circuits"></Route>
      <Route path="/standings"></Route>
      <Route path="/schedule"></Route>
      <Route path="/history"></Route>
    </Switch>
  );
}

export default App;
