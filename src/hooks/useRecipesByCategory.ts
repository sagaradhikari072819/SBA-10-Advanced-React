import { useEffect, useState } from "react";
import type { Category, RecipePreview } from "../api/types";
import { getRecipesByCategory } from "../api/recipe";


export function useRecipesByCategory(category:string){
     const [recipes, setRecipes] = useState<RecipePreview[]>([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState("");


      useEffect(() => {
          async function fetchData() {
            try {
              const res = await getRecipesByCategory(category);
              setRecipes(res.data?.meals || []);
              console.log("API RESPONSE:", res.data); //debug
            } catch (err) {
              setError("Failed to load recipes");
            } finally {
              setLoading(false);
            }
          }
      
          fetchData();
          
        }, [category]);

    return{
        recipes, loading, error
    }
}