import { Link } from "react-router-dom";
import type { RecipePreview } from "../api/types";

interface Props {
  recipe: RecipePreview;
}

function RecipeCard({ recipe }: Props) {
  return (
    <Link
      to={`/recipe/${recipe.idMeal}`}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          width: "220px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "10px",
          background: "white",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          style={{ width: "100%", borderRadius: "10px" }}
        />
        <h3>{recipe.strMeal}</h3>
      </div>
    </Link>
  );
}

export default RecipeCard;