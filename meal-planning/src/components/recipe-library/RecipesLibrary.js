import React from "react";
import RecipeCard from '../recipe-card/RecipeCard';

function RecipesLibrary() {

  const styles = {
    display: 'flex',
    justifyContent: 'space-evenly',
    paddingTop: '40px'
  }

  return (
    <section style={styles} className="recipe-section">
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </section>
  )
}

export default RecipesLibrary;
