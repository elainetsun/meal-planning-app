import React from "react";
import RecipeCard from "../recipe-card/RecipeCard";
import styles from "./RecipesLibrary.module.scss";

import AddRecipeDialog from "../add-recipe-dialog/AddRecipeDialog";

function RecipesLibrary() {
  const dummyDataRecipes = [
    {
      name: "Curry",
      description: "Yum",
    },
    {
      name: "Pasta",
      description: "yuuuuum",
    },
  ];
  console.log(dummyDataRecipes[0]);
  const [recipesLibraryState, setRecipesLibrary] = React.useState(
    dummyDataRecipes
  );

  return (
    <>
      <div className={styles.recipesHeader}>
        <h3>Recipes Library</h3>
        <AddRecipeDialog />
      </div>

      <section className={styles.recipeSection}>
        <RecipeCard recipe={dummyDataRecipes[0]} />
      </section>
    </>
  );
}

export default RecipesLibrary;
