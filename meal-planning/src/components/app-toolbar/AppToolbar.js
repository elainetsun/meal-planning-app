import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';

const AppToolbar = () => {
  return (
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
  );
};

export default AppToolbar;
