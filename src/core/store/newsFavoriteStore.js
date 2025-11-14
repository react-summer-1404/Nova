import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getToken } from "../../hooks/localStorage.js";

const useNewsFavorite = create(
  persist(
    (set, get) => ({
      addedNewsToFavorite: [],

      checkFave: (id) => {
        const current = get().addedNewsToFavorite;
        return current.includes(id);
      },

      clearFavorite: () => {
        set({ addedNewsToFavorite: [] });
      },

      addFavorite: (id) => {
        const token = getToken();

        if (!token) {
          get().clearFavorite();
          console.log("noting");
          return;
        }

        const current = get().addedNewsToFavorite;
        if (!current.includes(id)) {
          set({ addedNewsToFavorite: [...current, id] });
        }
      },

      removeFavorite: (id) => {
        const current = get().addedNewsToFavorite;
        const updated = current.filter((id) => id !== id);
        set({ addedNewsToFavorite: updated });
      },
    }),
    { name: "favorite-storage" }
  )
);

export default useNewsFavorite;
