import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/login";
import Dash from "./pages/dashborad";
import RouteAuth from "./RouteAuth";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <RouteAuth exact path="/dashboard" component={Dash} />
      </Switch>
    </Router>
  );
}

export default App;
