
import RecipeCard from "../components/RecipeCard";
import { useRecipesByCategory } from "../hooks/useRecipesByCategory";
import { useParams } from "react-router-dom";


function Recipes() {
    const {name} =useParams<{name:string}>();

    const {recipes, loading, error} = useRecipesByCategory(name!);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>{error}</p>;
  if (!recipes || recipes.length === 0) return <p>No recipe found.</p>;



  return (
  
     <div style={{ padding: "20px" }}>
      <h1>{name} Recipes</h1>

      <div
        style={{
          // display: "grid",
          // gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          // gap: "20px",
          // marginTop: "20px",
        }}
      >
        {recipes.map(rec => (
          <RecipeCard key={rec.idMeal} recipe={rec} />
        ))}
      </div>
    </div>
)
}

export default Recipes;