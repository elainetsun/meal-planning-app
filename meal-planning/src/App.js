import React from 'react';
import AppToolbar from './components/app-toolbar/AppToolbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RecipesLibrary from './components/recipe-library/RecipesLibrary';
import ShoppingList from './components/shopping-list/ShoppingList';
import './App.scss';

const App = () => {
  return (
    <Router>
      <AppToolbar />
      <main>
        <Switch>
          <Route path="/recipes" component={RecipesLibrary} />
          <Route path="/shopping-list" component={ShoppingList} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
