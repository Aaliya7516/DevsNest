import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Day16a from "./components/Day16FirstReact/card";
import Day16b from "./components/Day16FirstReact/board";
import Day18a from './components/Day18IfElseInReact/board'
// import Day17 from "./components/Day17";

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
        {/* <Route exact path="/day17">
          <Day17 />
        </Route> */}
        <Route exact path="/day18a">
          <Day18a />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;