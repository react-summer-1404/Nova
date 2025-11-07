import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getToken } from "../../hooks/localStorage.js";
const useFavorite = create(
  persist(
    (set, get) => ({
      addedToFavorite: [],
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
    }),
    { name: "favorite-storage" }
  )
);

export default useFavorite;
