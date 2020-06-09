import React from "react";
import RecipeCard from "../recipe-card/RecipeCard";
import styles from "./RecipesLibrary.module.scss";

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

  const [recipesLibraryState, setRecipesLibrary] = React.useState(
    defaultRecipes
  );

  return (
    <>
      <div className={styles.recipesHeader}>
        <h3>Recipes Library</h3>
        <AddRecipeDialog />
      </div>

      <section className={styles.recipeSection}>
        {recipesLibraryState.map((recipe) => {
          return <RecipeCard recipe={recipe} key={recipe.id}/>;
        })}
      </section>
    </>
  );
}

export default RecipesLibrary;
