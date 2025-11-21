

import { useEffect, useState } from "react";
import type { RecipeDetail  } from "../api/types";
import { getRecipeById } from "../api/recipe";


export function useRecipeDetails(recipeId:string){
     const [recipe, setRecipe] = useState<RecipeDetail[]>([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState("");


      useEffect(() => {
          async function fetchData() {
            try {
              const res = await getRecipeById(recipeId);
              setRecipe(res.data?.meals?.[0] || null);
              console.log("API RESPONSE:", res.data); //debug
            } catch (err) {
              setError("Failed to load recipes");
            } finally {
              setLoading(false);
            }
          }
      
          fetchData();
          
        }, [recipeId]);

    return{
        recipe, loading, error
    }
}