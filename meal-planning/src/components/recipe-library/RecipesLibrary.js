import React, { useState, useEffect } from 'react';
import RecipeCard from '../recipe-card/RecipeCard';
import styles from './RecipesLibrary.module.scss';
import Button from '@material-ui/core/Button';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import RecipeDialog from '../recipe-dialog/RecipeDialog';
import TextField from '@material-ui/core/TextField';
import RecipeService from '../../services/RecipeService';

const RecipesLibrary = () => {
  const [addRecipeDialogOpen, setAddRecipeDialogOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState(
    RecipeService.getRecipes().sort(x => {
      return x.favorite ? -1 : 1;
    })
  );

  useEffect(() => {
    if (recipes.length) {
      RecipeService.saveRecipes(recipes);
    }
  }, [recipes]);

  const filteredRecipes = recipes.filter(recipe => {
    return recipe.name.toLowerCase().includes(search.toLowerCase());
  });

  const handleAddRecipeDialogClose = () => {
    setAddRecipeDialogOpen(false);
  };

  const handleAddRecipeDialogSubmit = recipe => {
    setRecipes(recipes.concat(recipe));
  };

  const handleEditRecipeDialogSubmit = editedRecipe => {
    const originalRecipeIndex = recipes.findIndex(
      recipe => recipe.id === editedRecipe.id
    );
    const newRecipes = [...recipes];
    newRecipes.splice(originalRecipeIndex, 1, editedRecipe);
    setRecipes(newRecipes);
  };

  const handleRecipeLibraryDelete = recipe => {
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
          onClick={() => setAddRecipeDialogOpen(true)}
          endIcon={<AddCircleOutline />}
        >
          Add
        </Button>
        <RecipeDialog
          isOpen={addRecipeDialogOpen}
          onClose={handleAddRecipeDialogClose}
          onSubmit={handleAddRecipeDialogSubmit}
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
              onRecipeEdit={handleEditRecipeDialogSubmit}
              onRecipeDelete={handleRecipeLibraryDelete}
              onFavoriteSort={handleFavoriteSort}
              key={recipe.id}
            />
          );
        })}
      </section>
    </>
  );
};

export default RecipesLibrary;
