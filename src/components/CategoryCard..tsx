import { Link } from "react-router-dom";
import type { Category } from "../api/types";

interface Props {
  category: Category;
}

function CategoryCard({ category }: Props) {
  return (
    <Link
      to={`/category/${category.strCategory}`}
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
          src={category.strCategoryThumb}
          alt={category.strCategory}
          style={{ width: "100%", borderRadius: "10px" }}
        />
        <h3>{category.strCategory}</h3>
      </div>
    </Link>
  );
}

export default CategoryCard;