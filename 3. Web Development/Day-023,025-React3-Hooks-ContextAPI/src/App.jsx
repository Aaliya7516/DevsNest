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
            <li><Link to="/day23">Day23</Link></li>
            <li><Link to="/day24">day24</Link></li>
          </ul>
        </nav>

      <Switch>
        <Route exact path="/day23"><Day23 /></Route>
        <Route exact path="/day24"><Day24 /></Route>
      </Switch>
      </div>

    </Router>
  );
}

export default App;