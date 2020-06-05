import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/recipes">Recipe Library</Link>
            </li>
            <li>
              <Link to="/shopping-list">View Shopping List</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/recipes">Recipes Library</Route>
          <Route path="/shopping-list">Shopping List</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
