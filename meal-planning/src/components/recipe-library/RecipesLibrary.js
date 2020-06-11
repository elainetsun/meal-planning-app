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
  const [filterDisplay, setFilterDisplay] = useState(recipes);

  const filteredRecipes = recipes.filter( recipe =>{
    return recipe.name.toLowerCase().includes(search.toLowerCase());
  }
)


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
        Search: <input className={styles.recipeSearchBar} type = "text" placeholder = "Search by recipe or tag ..." onChange = {e => setSearch(e.target.value)}></input>
      </div>

      <section className={styles.recipeSection}>
        {filteredRecipes.map(recipe => {
          return <RecipeCard recipe={recipe} key={recipe.id} />;
        })}
      </section>
    </>
  );
};

export default RecipesLibrary;
