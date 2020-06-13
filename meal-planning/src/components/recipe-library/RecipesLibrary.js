import React, { useState } from 'react';
import RecipeCard from '../recipe-card/RecipeCard';
import styles from './RecipesLibrary.module.scss';
import Button from '@material-ui/core/Button';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import AddRecipeDialog from '../add-recipe-dialog/AddRecipeDialog';
import TextField from '@material-ui/core/TextField';

const RecipesLibrary = () => {
  const defaultRecipes = [
    {
      id: 1,
      name: 'Curry',
      description: 'Yum'
    },
    {
      id: 2,
      name: 'Pasta',
      description: 'yuuuuum'
    },
    {
      id: 3,
      name: 'Cookies',
      description: 'yuuuuuuuuuuuum'
    },
    {
      id: 4,
      name: 'Peppa Pig',
      description: 'not yumm'
    }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recipes, setRecipes] = useState(defaultRecipes);
  const [search, setSearch] = useState('');

  const filteredRecipes = recipes.filter( recipe =>{
    return recipe.name.toLowerCase().includes(search.toLowerCase());
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleDialogClose = () => {
    setIsModalOpen(false);
  };

  const handleDialogSumbit = recipe => {
    setIsModalOpen(false);
    setRecipes(recipes.concat(recipe));
  };

  const removeCard = recipe => {
    const currentIndex = recipes.findIndex(currentRecipe => recipe === currentRecipe);
    const newList = [...recipes];
    newList.splice(currentIndex, 1);
    setRecipes(newList);
  };

  const handleFavoriteSort = recipe => {
    const currentIndex = recipes.findIndex(currentRecipe => recipe === currentRecipe);
    const newList = [...recipes];
    newList.splice(currentIndex, 1);
    newList.splice(0,0,recipe);
    setRecipes(newList);
  };

  const handleUnfavorite = recipe => {
    const currentIndex = recipes.findIndex(currentRecipe => recipe === currentRecipe);
    const newList = [...recipes];
    newList.splice(currentIndex, 1);
    setRecipes(newList.concat(recipe));
  };

  return (
    <>
      <div className={styles.recipesHeader}>
        <h3>Recipes Library</h3>
        <Button size="small" onClick={openModal} endIcon={<AddCircleOutline />}>
          Add
        </Button>
        <AddRecipeDialog
          isOpen={isModalOpen}
          handleDialogSumbit={handleDialogSumbit}
          handleDialogClose={handleDialogClose}
        />
      </div>

      <div className={styles.recipeSearchBar}>
        <TextField fullWidth="true" id="outlined-basic"  variant="outlined" placeholder = "Search by recipe or tag ..." onChange = {e => setSearch(e.target.value)}/>
      </div>

      <section className={styles.recipeSection}>
        {filteredRecipes.map(recipe => {
          return <RecipeCard recipe={recipe} removeCard={removeCard} handleFavoriteSort= {handleFavoriteSort} handleUnfavorite = {handleUnfavorite} key={recipe.id} />;
        })}
      </section>
    </>
  );
};

export default RecipesLibrary;
