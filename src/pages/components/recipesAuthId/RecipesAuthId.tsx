/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import styles from "./recipesAuthId.module.css";
import { useRouter } from "next/router";
import Button from "../button/Button";
import Modal from "../modal/Modal";

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
type RecipeIdType = {
  recipe: RecipeType | null;
  id: string;
};

const RecipesAuthId: React.FC<RecipeIdType> = ({ recipe, id }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const router = useRouter();
  const onDeleteLocation = async () => {
    const headers = {
      authorization: cookie.get("log15152Log"),
    };
    const response = await axios.delete(
      `${process.env.SERVER_URL}/recipes/${id}`,
      {
        headers,
      }
    );
    if (response.status === 200) {
      console.log("delete");

      router.push("/");
    }
  };

  return (
    <>
      {recipe && (
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
            <Button
              text="DELETE"
              className={styles.btn}
              onClick={() => setIsShowModal(true)}
              isLoading={false}
            />
          </div>
          {isShowModal && (
            <Modal
              onConfirm={onDeleteLocation}
              onCancel={() => setIsShowModal(false)}
            />
          )}
        </div>
      )}
    </>
  );
};
export default RecipesAuthId;
