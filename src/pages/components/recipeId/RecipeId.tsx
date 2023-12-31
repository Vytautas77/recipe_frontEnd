/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import cookie from "js-cookie";
import axios from "axios";
import styles from "./recipeId.module.css";
import { useRouter } from "next/router";
import Button from "../button/Button";
import Comments from "../comments/Comments";
import CommentSend from "../commentSend/CommentSend";

type CommentType = {
  _id: string;
  commentText: string;
  date: string;
  gainedLikesNumber: number;
  recipeId: string;
};

type RecipesType = {
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
type RecipeIdType = {
  recipe: RecipesType | null;
  id: string;
};

const RecipeId: React.FC<RecipeIdType> = ({ recipe, id }) => {
  const comments = recipe?.recipesComments;

  return (
    <>
      {recipe && (
        <div className={styles.wrapper}>
          <div className={styles.leftBox}>
            <h5>{`Kategorija: ${recipe.category}`}</h5>
            <h1>{recipe.title}</h1>
            <h5>{`Recepto autorius: ${recipe.recipeAuthor}`}</h5>
            <img
              className={styles.img}
              src={recipe.recipePhotoUrl}
              alt={`Nuotrauka ${recipe.title}`}
            />
            <p>
              <span style={{ fontWeight: "bold" }}>Autorius apie receptą:</span>
              {`  ${recipe.description}`}
            </p>
            <div className={styles.commentsWrapper}>
              <Comments comments={comments as []} />
              <CommentSend id={id} />
            </div>
          </div>

          <p className={styles.rightBox}>
            <span style={{ fontWeight: "bold" }}>Paruošimo būdas:</span> <br />
            {recipe.methodOfPreparation}
          </p>
        </div>
      )}
    </>
  );
};

export default RecipeId;
