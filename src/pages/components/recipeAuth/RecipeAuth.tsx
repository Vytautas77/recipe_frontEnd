/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import styles from "./recipeAuth.module.css";
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

const RecipeAuth: React.FC<RecipeComponentType> = ({ recipe }) => {
  return (
    <>
      {recipe && (
        <Link className={styles.link} href={`/recipeAuthId/${recipe._id}`}>
          <div className={styles.wrapper}>
            <div>
              <h2
                className={styles.category}
              >{`Kategorija ${recipe.category}`}</h2>

              <img
                src={recipe.recipePhotoUrl}
                alt={`Photo of ${recipe.title}`}
                className={styles.img}
              />
            </div>
            <div className={styles.infoBar}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default RecipeAuth;
