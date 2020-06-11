import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import RecipesLibrary from '../recipe-library/RecipesLibrary';
import ShoppingList from '../shopping-list/ShoppingList';

const AppToolbar = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <nav className="nav">
            <Link className="nav-link" to="/recipes">
              Recipes
            </Link>
            <Link className="nav-link" to="/shopping-list">
              Shopping List
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      <main>
        <Switch>
          <Route path="/recipes">
            <RecipesLibrary />
          </Route>
          <Route path="/shopping-list">
            <ShoppingList />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default AppToolbar;
