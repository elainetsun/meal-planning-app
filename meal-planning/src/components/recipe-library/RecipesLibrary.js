import React from "react";
import RecipeCard from "../recipe-card/RecipeCard";
import styles from "./RecipesLibrary.module.scss";

import AddRecipeDialog from "../add-recipe-dialog/AddRecipeDialog";

function RecipesLibrary() {
  return (
    <>
      <div className={styles.recipesContainer}>
        <h3>Recipes Library</h3>
        <AddRecipeDialog />
      </div>

      <section className={styles.recipeSection}>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </section>
    </>
  );
}

export default RecipesLibrary;
