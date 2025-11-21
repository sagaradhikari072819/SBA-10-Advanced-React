import CategoryCard from "../components/CategoryCard.";
import { useCategories } from "../hooks/useCategories";


function HomePage() {
  const { categories, loading, error } = useCategories();

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>{error}</p>;
  if (!categories || categories.length === 0) return <p>No categories found.</p>;

console.log("HOME CATEGORIES:", categories);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Recipe Categories</h1>

      <div
        // style={{
        //   display: "grid",
        //   gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        //   gap: "20px",
        //   marginTop: "20px",
        // }}
      >
        {categories.map(cat => (
          <CategoryCard key={cat.idCategory} category={cat} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;