import React, { useEffect, useState } from "react";
import axios from "axios";
import PageTemplate from "./template/PageTemplate";
import Recipes from "./components/recipes/Recipes";
import { useRouter } from "next/router";

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

const Index = () => {
  const [recipes, setRecipes] = useState<Array<any> | null>(null);
  const router = useRouter();

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(`${process.env.SERVER_URL}/recipes`);
      const sortedRecipes = response.data.recipes
        .sort((a: RecipeType, b: RecipeType) => {
          return a.date > b.date ? 1 : -1;
        })
        .slice(0, 8);

      setRecipes(sortedRecipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      // @ts-ignore
      if (error.response && error.response.status === 401) {
        router.push("/Login");
      }
    }
  };

  useEffect(() => {
    fetchRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <PageTemplate>
        <Recipes recipes={recipes} />
      </PageTemplate>
    </div>
  );
};

export default Index;
