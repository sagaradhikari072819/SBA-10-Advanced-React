import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/search/${search}`);
    setSearch("");
  }

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 25px",
        background: "#ffffff",
        borderBottom: "1px solid #ddd",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Left side navigation */}
      <nav style={{ display: "flex", gap: "20px", fontSize: "18px" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#333" }}>
          Home
        </Link>

        <Link to="/favorites" style={{ textDecoration: "none", color: "#333" }}>
          Favorites
        </Link>
      </nav>

      {/* Search Bar */}
      <form onSubmit={handleSearch} style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={search}
          placeholder="Search recipes..."
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "8px 12px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            width: "200px",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "8px 15px",
            border: "none",
            borderRadius: "6px",
            background: "black",
            color: "white",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>
    </header>
  );
}

export default NavBar;