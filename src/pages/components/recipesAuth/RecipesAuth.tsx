import React from "react";
import styles from "./recipesAuth.module.css";
import photo from "../image/Bevardis.png";

import Image from "next/image";
import RecipeAuth from "../recipeAuth/RecipeAuth";

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
  recipesComments: [];
};
type RecipesType = {
  recipes: RecipeType[] | null;
};

const RecipesAuth: React.FC<RecipesType> = ({ recipes }) => {
  return (
    <>
      <div className={styles.wrapper}>
        {recipes && recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe._id}>
              <RecipeAuth recipe={recipe} />
            </div>
          ))
        ) : (
          <p>No recipes available.</p>
        )}
      </div>
      <Image
        src={photo}
        className={styles.photo}
        alt="Landscape picture"
        width={800}
        height={500}
      />
    </>
  );
};
export default RecipesAuth;
