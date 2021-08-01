import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import style from './app.css';
import Day15 from "./components/Day15HelloReact/hello";
import Day16a from "./components/Day16FirstReact/card";
import Day16b from "./components/Day16FirstReact/board";
import Day17a from "./components/Day17Props/calorie";
import Day18a from './components/Day18IfElseInReact/board';
import Day18b from './components/Day18IfElseInReact/calorieRedGreen';
import Day19a from './components/Day19LifeCycleMethods_ClassBasedComponents_Webpacks/btn';
import Day20a from './components/Day20Hooks/calList';
import Day21a from './components/Day21_API_CRUD_Forms/calList';

function App() {
  return (
    <Router >

      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/day15">day15</Link></li>
            <li><Link to="/day16a">day16a</Link></li>
            <li><Link to="/day16b">day16b</Link></li>
            <li><Link to="/day17a">day17a</Link></li>
            <li><Link to="/day18a">day18a</Link></li>
            <li><Link to="/day18b">day18b</Link></li>
            <li><Link to="/day19a">day19a</Link></li>
            <li><Link to="/day20a">day20a</Link></li>
            <li><Link to="/day21a">day21a</Link></li>
          </ul>
        </nav>

      <Switch>
        <Route exact path="/day15"><Day15 /></Route>
        <Route exact path="/day16a"><Day16a /></Route>
        <Route exact path="/day16b"><Day16b /></Route>
        <Route exact path="/day17a"><Day17a /></Route>
        <Route exact path="/day18a"><Day18a /></Route>
        <Route exact path="/day18b"><Day18b /></Route>
        <Route exact path="/day19a"><Day19a /></Route>
        <Route exact path="/day20a"><Day20a /></Route>
        <Route exact path="/day21a"><Day21a /></Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;