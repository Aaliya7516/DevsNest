import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import style from './app.css';
import Day26 from "./components/Day26-reducer/App";
// import Day27 from "./components/Day27";

function App() {
  return (
    <Router >

      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/day26">Day26</Link></li>
            {/* <li><Link to="/day27">day27</Link></li> */}
          </ul>
        </nav>

      <Switch>
        <Route exact path="/day26"><Day26 /></Route>
        {/* <Route exact path="/day27"><Day27 /></Route> */}
      </Switch>
      </div>

    </Router>
  );
}

export default App;