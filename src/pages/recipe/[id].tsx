import React, { useState, useEffect } from "react";
import cookie from "js-cookie";
import PageTemplate from "../template/PageTemplate";
import { useRouter } from "next/router";
import axios from "axios";
import RecipeId from "../components/recipeId/RecipeId";

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

const Recipe = () => {
  const [recipe, setRecipe] = useState<RecipeType | null>(null);
  const router = useRouter();

  const fetchRecipe = async (id: string) => {
    try {
      const response = await axios.get(
        `${process.env.SERVER_URL}/recipes/${id}/comments`
      );

      setRecipe(response.data.recipe);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const recipeId = router.query.id;

  useEffect(() => {
    router.query.id && fetchRecipe(router.query.id as string);
  }, [router.query.id]);

  const id = router.query.id;
  return (
    <PageTemplate>
      <RecipeId recipe={recipe} id={id as string} />
    </PageTemplate>
  );
};

export default Recipe;
