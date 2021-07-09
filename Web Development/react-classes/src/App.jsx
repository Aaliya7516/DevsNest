import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./App.css";
import Day16 from "./components/Day16FirstReact/card";
import Day18a from './components/Day18IfElseInReact/board'
// import Day17 from "./components/Day17";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/day16">
          <Day16 />
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