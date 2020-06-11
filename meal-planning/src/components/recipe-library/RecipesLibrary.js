import React, { useState } from 'react';
import RecipeCard from '../recipe-card/RecipeCard';
import styles from './RecipesLibrary.module.scss';
import Button from '@material-ui/core/Button';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import AddRecipeDialog from '../add-recipe-dialog/AddRecipeDialog';

const RecipesLibrary = () => {
  const defaultRecipes = [
    {
      id: 1,
      name: 'Curry',
      description: 'Yum',
    },
    {
      id: 2,
      name: 'Pasta',
      description: 'yuuuuum',
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recipes, setRecipes] = useState(defaultRecipes);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleDialogClose = () => {
    setIsModalOpen(false);
  };

  const handleDialogSumbit = (recipe) => {
    setIsModalOpen(false);
    setRecipes(recipes.concat(recipe));
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

      <section className={styles.recipeSection}>
        {recipes.map((recipe) => {
          return (
            <div className={styles.card}>
              <RecipeCard recipe={recipe} key={recipe.id} />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default RecipesLibrary;
