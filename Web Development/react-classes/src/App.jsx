import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Day16a from "./components/Day16FirstReact/card";
import Day16b from "./components/Day16FirstReact/board";
import Day17a from "./components/Day17Props/calorie";
import Day18a from './components/Day18IfElseInReact/board';

function App() {
  return (
    <Router >
      <Switch>
        <Route exact path="/day16a">
          <Day16a />
        </Route>
        <Route exact path="/day16b">
          <Day16b />
        </Route>
        <Route exact path="/day17a">
          <Day17a />
        </Route>
        <Route exact path="/day18a">
          <Day18a />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;