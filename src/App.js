import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import login from "./pages/login/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={login} />
        <Route exact path="/login" component={login} />
      </Switch>
    </Router>
  );
}

export default App;
