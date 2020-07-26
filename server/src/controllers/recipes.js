const recipesRouter = require('express').Router();
const recipes = require('../utils/recipeData');

recipesRouter.get('/', (req, res) => {
  res.json(recipes);
});

module.exports = recipesRouter;
