import React from "react";
import "./RecipesLibrary.scss";

import AddRecipeDialog from "../add-recipe-dialog/AddRecipeDialog";

function RecipesLibrary() {
  return (
    <div className="recipesContainer">
      <h3>Recipes Library</h3>
      <AddRecipeDialog />
    </div>
  );
}

export default RecipesLibrary;
