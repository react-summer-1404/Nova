import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getToken } from "../../hooks/localStorage.js";

const useFavorite = create(
  persist(
    (set, get) => ({
      addedToFavorite: [],

      checkFave: (courseId) => {
        const current = get().addedToFavorite;
        return current.includes(courseId);
      },

      clearFavorite: () => {
        set({ addedToFavorite: [] });
      },

      addFavorite: (courseId) => {
        const token = getToken();

        if (!token) {
          get().clearFavorite();
          console.log("noting");
          return;
        }

        const current = get().addedToFavorite;
        if (!current.includes(courseId)) {
          set({ addedToFavorite: [...current, courseId] });
        }
      },

      removeFavorite: (courseId) => {
        const current = get().addedToFavorite;
        const updated = current.filter((id) => id !== courseId);
        set({ addedToFavorite: updated });
      },
    }),
    { name: "favorite-storage" }
  )
);

export default useFavorite;
