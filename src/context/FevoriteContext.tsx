import { createContext, useEffect, useState, type ReactNode } from "react";
import type { RecipeDetail } from "../api/types";

interface FavoriteContextType {
  favorites: RecipeDetail[];
  addFavorite: (recipe: RecipeDetail) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export function FavoritesProvider({ children }: Props) {
  const [favorites, setFavorites] = useState<RecipeDetail[]>(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (recipe: RecipeDetail) => {
    setFavorites((prev) => [...prev, recipe]);
  };

  const removeFavorite = (id: string) => {
    setFavorites((prev) => prev.filter((r) => r.idMeal !== id));
  };

  const isFavorite = (id: string) => {
    return favorites.some((r) => r.idMeal === id);
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}