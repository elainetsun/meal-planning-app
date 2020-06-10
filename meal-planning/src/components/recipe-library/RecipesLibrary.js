import React from "react";
import RecipeCard from "../recipe-card/RecipeCard";
import styles from "./RecipesLibrary.module.scss";
import Button from "@material-ui/core/Button";
import AddCircleOutline from "@material-ui/icons/AddCircleOutline";
import AddRecipeDialog from "../add-recipe-dialog/AddRecipeDialog";

function RecipesLibrary() {
  const defaultRecipes = [
    {
      id: 1,
      name: "Curry",
      description: "Yum",
    },
    {
      id: 2,
      name: "Pasta",
      description: "yuuuuum",
    },
  ];

  const [recipesLibraryState, setRecipesLibraryState] = React.useState({
    isModalOpen: false,
    recipes: defaultRecipes,
  });

  const openModal = () => {
    setRecipesLibraryState({ ...recipesLibraryState, isModalOpen: true });
  };

  const handleDialogClose = () => {
    setRecipesLibraryState({
      ...recipesLibraryState,
      isModalOpen: false,
    });
  };

  const handleDialogSumbit = (recipe) => {
    setRecipesLibraryState((state) => {
      return {
        isModalOpen: false,
        recipes: state.recipes.concat(recipe),
      };
    });
  };

  return (
    <>
      <div className={styles.recipesHeader}>
        <h3>Recipes Library</h3>
        <Button size="small" onClick={openModal} endIcon={<AddCircleOutline />}>
          Add
        </Button>
        <AddRecipeDialog
          isOpen={recipesLibraryState.isModalOpen}
          handleDialogSumbit={handleDialogSumbit}
          handleDialogClose={handleDialogClose}
        />
      </div>

      <section className={styles.recipeSection}>
        {recipesLibraryState.recipes.map((recipe) => {
          return (
            <div className={styles.card}>
              <RecipeCard recipe={recipe} key={recipe.id} />
            </div>
          );
        })}
      </section>
    </>
  );
}

export default RecipesLibrary;
