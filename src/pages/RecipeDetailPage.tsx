import { useParams } from "react-router-dom";
// import { useRecipeDetails } from "../hooks/useRecipeDetails";
import { useRecipeDetails } from "../hooks/useRecipeDetails";
import { useFavorites } from "../hooks/useFavorites";

function RecipeDetails() {
  const { id } = useParams<{ id: string }>();
  const { recipe, loading, error } = useRecipeDetails(id!);

  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  if (loading) return <p>Loading recipe...</p>;
  if (error) return <p>{error}</p>;
  if (!recipe) return <p>Recipe not found.</p>;

  const ingredients = getIngredients(recipe);

  const fav = isFavorite(recipe.idMeal);

  function handleFavorite() {
    fav ? removeFavorite(recipe.idMeal) : addFavorite(recipe);
  }

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>{recipe.strMeal}</h1>

      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        style={{
          width: "100%",
          borderRadius: "12px",
          marginBottom: "20px",
        }}
      />

      {/* <p>
        <strong>Category:</strong> {recipe.strCategory}
      </p>
      <p>
        <strong>Area:</strong> {recipe.strArea}
      </p> */}

      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>
            {/* {item.ingredient} — {item.measure} */}
             {item.ingredient} - {item.measure}
          </li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <p style={{ whiteSpace: "pre-line", lineHeight: "1.6" }}>
        {recipe.strInstructions}
      </p>

      <button
        onClick={handleFavorite}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        {fav ? "💔 Remove from Favorites" : "❤️ Add to Favorites"}
      </button>
    </div>
  );
}

export default RecipeDetails;

// ----------------------
// Helper Function
// ----------------------

function getIngredients(recipe: any) {
  const ingredients: { ingredient: string; measure: string }[] = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push({ ingredient, measure });
    }
  }

  return ingredients;
}