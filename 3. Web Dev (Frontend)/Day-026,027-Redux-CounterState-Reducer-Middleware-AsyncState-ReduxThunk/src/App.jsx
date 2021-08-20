import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Day26a from "./components/Day26-class-reducer/App";
import Day26b from "./components/Day26-THA-LoginPage/App";
import Day27 from "./components/Day27-TodoList-thunk/App";

function App() {
  return (
    <Router >

      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/day26a">Day26a</Link></li>
            <li><Link to="/day26b">Day26b</Link></li>
            <li><Link to="/day27">day27</Link></li>
          </ul>
        </nav>

      <Switch>
        <Route exact path="/day26a"><Day26a /></Route>
        <Route exact path="/day26b"><Day26b /></Route>
        <Route exact path="/day27"><Day27 /></Route>
      </Switch>
      </div>

    </Router>
  );
}

export default App;