import React, { useState, useEffect } from "react";
import cookie from "js-cookie";
import PageTemplate from "../template/PageTemplate";
import { useRouter } from "next/router";
import axios from "axios";

import RecipesAuthId from "../components/recipesAuthId/RecipesAuthId";

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

const RecipeAuthId = () => {
  const [recipe, setRecipe] = useState<RecipeType | null>(null);
  const router = useRouter();

  const fetchRecipe = async (id: string) => {
    try {
      const headers = {
        authorization: cookie.get("log15152Log"),
      };
      const response = await axios.get(
        `${process.env.SERVER_URL}/recipes/${id}`,
        { headers }
      );
      setRecipe(response.data.recipe);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    router.query.id && fetchRecipe(router.query.id as string);
  }, [router.query.id]);
  return (
    <PageTemplate>
      <RecipesAuthId recipe={recipe} id={router.query.id as string} />
    </PageTemplate>
  );
};

export default RecipeAuthId;
