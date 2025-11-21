import { useFavorites } from "../hooks/useFavorites";
import RecipeCard from "../components/RecipeCard";

function Favorites() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) return <p style={{ padding: "20px" }}>No favorites yet.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Favorites</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {favorites.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;