import { useEffect, useState } from "react";
import type { Category } from "../api/types";
import { getCategories } from "../api/recipe";


export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getCategories();
        setCategories(res.data?.categories || []);
        console.log("API RESPONSE:", res.data); //debug
      } catch (err) {
        setError("Failed to load categories");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    
  }, []);

  
  return { categories, loading, error};
}