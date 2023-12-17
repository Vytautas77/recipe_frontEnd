/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./recipe.module.css";

type RecipeType = {
  _id: string;
  category: string;
  date: string;
  description: string;
  methodOfPreparation: string;
  owner_id: string;
  recipeAuthor: string;
  recipePhotoUrl: string;
  title: string;
};
type RecipeComponentType = {
  recipe: RecipeType;
};

const Recipe: React.FC<RecipeComponentType> = ({ recipe }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.category}>{`Kategorija ${recipe.category}`}</div>
        <img
          src={recipe.recipePhotoUrl}
          alt={`Photo of ${recipe.title}`}
          className={styles.img}
        />
        <h3>{recipe.title}</h3>
      </div>
    </>
  );
};

export default Recipe;
