import React from "react";
import styles from "./recipes.module.css";
import Recipe from "../recipe/Recipe";
import photo from "../image/Bevardis.png";
import woman from "../image/atsiliepimas.png";
import Image from "next/image";

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
type RecipesType = {
  recipes: RecipeType[] | null;
};

const Recipes: React.FC<RecipesType> = ({ recipes }) => {
  return (
    <>
      <div className={styles.wrapper}>
        {recipes && recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe._id}>
              <Recipe recipe={recipe} />
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
      <h2 className={styles.opinion}>Atsiliepimai:</h2>
      <div className={styles.opinionWrapper}>
        <div className={styles.opinionBox}>
          <Image
            src={woman}
            className={styles.photo}
            alt="Landscape picture"
            width={800}
            height={500}
          />
          <h2>Stefanija Kraunė</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis, dolor. At temporibus deserunt, ab exercitationem
            commodi neque ex, esse illum rem enim tenetur laudantium! Commodi
            quas eligendi velit blanditiis iure?
          </p>
        </div>
        <div className={styles.opinionBox}>
          <Image
            src={woman}
            className={styles.photo}
            alt="Landscape picture"
            width={800}
            height={500}
          />
          <h2>Stefanija Kraunė</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis, dolor. At temporibus deserunt, ab exercitationem
            commodi neque ex, esse illum rem enim tenetur laudantium! Commodi
            quas eligendi velit blanditiis iure?
          </p>
        </div>
        <div className={styles.opinionBox}>
          <Image
            src={woman}
            className={styles.photo}
            alt="Landscape picture"
            width={800}
            height={500}
          />
          <h2>Stefanija Kraunė</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis, dolor. At temporibus deserunt, ab exercitationem
            commodi neque ex, esse illum rem enim tenetur laudantium! Commodi
            quas eligendi velit blanditiis iure?
          </p>
        </div>
      </div>
    </>
  );
};
export default Recipes;
