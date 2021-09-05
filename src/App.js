import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/login";
import RouteAuth from "./RouteAuth";
import Dashboard from "./pages/dashborad";
import Sites from "./pages/sites";
import SiteDescription from "./pages/sitediscription";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <RouteAuth exact path="/" component={Dashboard} />
        <RouteAuth exact path="/dashboard" component={Dashboard} />
        <RouteAuth exact path="/sites" component={Sites} />
        <RouteAuth exact path="/site-description" component={SiteDescription} />
      </Switch>
    </Router>
  );
}

export default App;
