import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchRecipes } from "../api/recipe";
import RecipeCard from "../components/RecipeCard";

function Search() {
  const { query } = useParams<{ query: string }>();
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSearch() {
      setLoading(true);
      const res = await searchRecipes(query!);
      setResults(res.data.meals || []);
      setLoading(false);
    }

    fetchSearch();
  }, [query]);

  if (loading) return <p style={{ padding: "20px" }}>Searching...</p>;

  if (results.length === 0)
    return <p style={{ padding: "20px" }}>No results found for "{query}".</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Search Results</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {results.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Search;