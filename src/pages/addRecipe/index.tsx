import React, { useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import styles from "./addRecipe.module.css";
import PageTemplate from "../template/PageTemplate";

const addRecipe = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [recipeAuthor, setRecipeAuthor] = useState("");
  const [recipePhotoUrl, setRecipePhotoUrl] = useState("");
  const [description, setDescription] = useState("");
  const [methodOfPreparation, setMethodOfPreparation] = useState("");

  return (
    <PageTemplate>
      <h2> Įdėkite receptą</h2>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Pavadinimas"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Kategorija"
        />
        <input
          type="text"
          value={recipeAuthor}
          onChange={(e) => setRecipeAuthor(e.target.value)}
          placeholder="Recepto autorius"
        />
        <input
          type="text"
          value={recipePhotoUrl}
          onChange={(e) => setRecipePhotoUrl(e.target.value)}
          placeholder="Nuotraukos URL"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Aprašymas"
        />
        <input
          type="text"
          value={methodOfPreparation}
          onChange={(e) => setMethodOfPreparation(e.target.value)}
          placeholder="Paruošimo būdas"
        />
      </div>
    </PageTemplate>
  );
};

export default addRecipe;
