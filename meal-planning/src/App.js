import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RecipesLibrary from "./components /recipe-library/RecipesLibrary";
import ShoppingList from "./components /shopping-list/ShoppingList";
import "./App.css";

// import { RecipesLibrary } from "./components/recipe-library/RecipesLibrary";
// import { ShoppingList } from "./components/shopping-list/ShoppingList";

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
          <Route path="/recipes">
            <RecipesLibrary />
          </Route>
          <Route path="/shopping-list">
            <ShoppingList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
