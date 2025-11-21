import { useContext } from "react";
import { FavoriteContext } from "../context/FevoriteContext";

export function useFavorites() {
  const context = useContext(FavoriteContext);
  console.log(context);
  
  if (!context) {
    throw new Error("useFavorites must be used inside FavoritesProvider");
  }
  return context;
}