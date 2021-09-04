import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
