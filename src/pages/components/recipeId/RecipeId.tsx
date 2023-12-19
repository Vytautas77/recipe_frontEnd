/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import cookie from "js-cookie";
import axios from "axios";
import styles from "./recipeId.module.css";
import { useRouter } from "next/router";
import Button from "../button/Button";
import Comments from "../comments/Comments";

type CommentType = {
  _id: string;
  commentText: string;
  date: string;
  gainedLikesNumber: number;
  recipeId: string;
};

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
};

const RecipeId: React.FC<RecipeIdType> = ({ recipe }) => {
  const [commentsLocations, setCommentsLocations] =
    useState<Array<CommentType> | null>(null);

  const router = useRouter();

  const fetchComments = async () => {
    try {
      const headers = {
        authorization: cookie.get("log15152Log"),
      };
      const response = await axios.get(`${process.env.SERVER_URL}/comments`, {
        headers,
      });
      setCommentsLocations(response.data.comments);
    } catch (error) {
      console.error("Error fetching locations:", error);
      //@ts-ignore
      if (error.response.status === 401) {
        router.push("/");
      }
    }
  };
  useEffect(() => {
    fetchComments();
  }, []);

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
              alt={`Recepto nuotrauka ${recipe.title}`}
            />
            <p>{recipe.description}</p>

            <Comments comments={commentsLocations} />

            <div className={styles.commentsWrapper}>
              <h5>Palikti komentarą:</h5>
              <textarea
                cols={48}
                rows={5}
                placeholder="Palikti komentatrą"
              ></textarea>
              <Button text="Siųsti" />
            </div>
          </div>

          <p className={styles.rightBox}>{recipe.methodOfPreparation}</p>
        </div>
      )}
    </>
  );
};

export default RecipeId;
