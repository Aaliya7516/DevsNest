import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Day16a from "./components/Day16FirstReact/card";
import Day16b from "./components/Day16FirstReact/board";
import Day17a from "./components/Day17Props/calorie";
import Day18a from './components/Day18IfElseInReact/board';
import Day18b from './components/Day18IfElseInReact/calorieRedGreen';
import Day19a from './components/Day19LifeCycleMethods_ClassBasedComponents_Webpacks/btn';

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
        <Route exact path="/day18b">
          <Day18b />
        </Route>
        <Route exact path="/day19a">
          <Day19a />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;