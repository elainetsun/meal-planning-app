import React from "react";
import RecipeCard from '../recipe-card/RecipeCard';
import styles from './RecipesLibrary.module.scss';

function RecipesLibrary() {

  return (
    <section className={styles.recipeSection} >
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </section>
  )
}

export default RecipesLibrary;
