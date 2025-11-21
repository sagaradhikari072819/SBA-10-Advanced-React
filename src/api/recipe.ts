import axios from "axios";

const API = "https://www.themealdb.com/api/json/v1/1";

// Fetch all categories
export function getCategories() {
  return axios.get(`${API}/categories.php`);
}

// Fetch recipes under a specific category
export function getRecipesByCategory(category: string) {
  return axios.get(`${API}/filter.php?c=${category}`);
}

// // Search recipes by name
export function searchRecipes(query: string) {
  return axios.get(`${API}/search.php?s=${query}`);
}

// Get a specific recipe by ID
export function getRecipeById(id: string) {
  return axios.get(`${API}/lookup.php?i=${id}`);
}