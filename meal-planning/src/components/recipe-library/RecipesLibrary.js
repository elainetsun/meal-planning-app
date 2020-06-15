import React, { useState } from 'react';
import RecipeCard from '../recipe-card/RecipeCard';
import styles from './RecipesLibrary.module.scss';
import Button from '@material-ui/core/Button';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import RecipeDialog from '../recipe-dialog/RecipeDialog';
import TextField from '@material-ui/core/TextField';
import defaultRecipes from './DefaultRecipes';

const RecipesLibrary = () => {
  const [recipeDialogOpen, setRecipeDialogOpen] = useState(false);
  const [recipes, setRecipes] = useState(
    defaultRecipes.sort(x => {
      return x.favorite ? -1 : 1;
    })
  );
  const [search, setSearch] = useState('');

  const filteredRecipes = recipes.filter(recipe => {
    return recipe.name.toLowerCase().includes(search.toLowerCase());
  });

  const recipeDialogClose = () => {
    setRecipeDialogOpen(false);
  };

  const recipeDialogAddSubmit = recipe => {
    setRecipes(recipes.concat(recipe));
  };

  const recipeDialogEditSubmit = editedRecipe => {
    const originalRecipeIndex = recipes.findIndex(
      recipe => recipe.id === editedRecipe.id
    );
    const newRecipes = [...recipes];
    newRecipes.splice(originalRecipeIndex, 1, editedRecipe);
    setRecipes(newRecipes);
  };

  const removeCard = recipe => {
    const currentIndex = recipes.findIndex(
      currentRecipe => recipe === currentRecipe
    );
    const newList = [...recipes];
    newList.splice(currentIndex, 1);
    setRecipes(newList);
  };

  const handleFavoriteSort = () => {
    const newList = [...recipes];
    newList.sort((x, y) => {
      return x.favorite === y.favorite ? 0 : x.favorite ? -1 : 1;
    });
    setRecipes(newList);
  };

  return (
    <>
      <div className={styles.recipesHeader}>
        <h3>Recipes Library</h3>
        <Button
          size="small"
          onClick={() => setRecipeDialogOpen(true)}
          endIcon={<AddCircleOutline />}
        >
          Add
        </Button>
        <RecipeDialog
          isOpen={recipeDialogOpen}
          recipeDialogClose={recipeDialogClose}
          recipeDialogSubmit={recipeDialogAddSubmit}
        />
      </div>

      <div className={styles.recipeSearchBar}>
        <TextField
          fullWidth
          id="outlined-basic"
          variant="outlined"
          placeholder="Search by recipe or tag ..."
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <section className={styles.recipeSection}>
        {filteredRecipes.map(recipe => {
          return (
            <RecipeCard
              recipe={recipe}
              editRecipe={recipeDialogEditSubmit}
              removeCard={removeCard}
              handleFavoriteSort={handleFavoriteSort}
              key={recipe.id}
            />
          );
        })}
      </section>
    </>
  );
};

export default RecipesLibrary;
