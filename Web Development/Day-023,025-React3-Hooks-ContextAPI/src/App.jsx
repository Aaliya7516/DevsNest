import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import style from './app.css';
import Day23 from "./components/Day23CustomHooks_ReactRouterDom/hooks";
import Day24 from "./components/Day24_StateManagementWithContextAndReducer/base";

function App() {
  return (
    <Router >

      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            {/* <li><Link to="/day15">day15</Link></li> */}
            {/* <li><Link to="/day16a">day16a</Link></li> */}
            {/* <li><Link to="/day16b">day16b</Link></li> */}
            {/* <li><Link to="/day17a">day17a</Link></li> */}
            {/* <li><Link to="/day18a/">day18a</Link></li> */}
            {/* <li><Link to="/day18b">day18b</Link></li> */}
            {/* <li><Link to="/day19a">day19a</Link></li> */}
            <li><Link to="/day23">Day23</Link></li>
            <li><Link to="/day24">day24</Link></li>
          </ul>
        </nav>

      <Switch>
        {/* <Route exact path="/day15"><Day15 /></Route> */}
        {/* <Route exact path="/day16a"><Day16a /></Route> */}
        {/* <Route exact path="/day16b"><Day16b /></Route> */}
        {/* <Route exact path="/day17a"><Day17a /></Route> */}
        {/* <Route exact path="/day18a"><Day18a /></Route> */}
        {/* <Route exact path="/day18b"><Day18b /></Route> */}
        {/* <Route exact path="/day19a"><Day19a /></Route> */}
        <Route exact path="/day23"><Day23 /></Route>
        <Route exact path="/day24"><Day24 /></Route>
      </Switch>
      </div>

    </Router>
  );
}

export default App;