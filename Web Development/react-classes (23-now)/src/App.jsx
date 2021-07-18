import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import style from './app.css';
import Day23 from "./components/Day23CustomHooks_ReactRouterDom";

function App() {
  return (
    <Router >
      <Switch>
      <Route exact path="/day23">
          <Day23 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;