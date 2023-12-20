/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./recipe.module.css";
import Link from "next/link";

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
  userName: string;
};
type RecipeComponentType = {
  recipe: RecipeType;
};

const Recipe: React.FC<RecipeComponentType> = ({ recipe }) => {
  return (
    <>
      {recipe && (
        <Link className={styles.link} href={`/recipe/${recipe._id}`}>
          <div className={styles.wrapper}>
            <div
              className={styles.category}
            >{`Kategorija ${recipe.category}`}</div>
            <img
              src={recipe.recipePhotoUrl}
              alt={`Photo of ${recipe.title}`}
              className={styles.img}
            />
            <h5>{recipe.title}</h5>
          </div>
        </Link>
      )}
    </>
  );
};

export default Recipe;
