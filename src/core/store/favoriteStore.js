import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFavorite = create(
  persist(
    (set, get) => ({
      addedToFavorite: [],

      addFavorite: (courseId) => {
        const current = get().addedToFavorite;
        if (!current.includes(courseId)) {
          set({ addedToFavorite: [...current, courseId] });
        }
      },

      removeFavorite: (courseId) => {
        const current = get().addedToFavorite;
        set({
          addedToFavorite: current.filter((id) => id !== courseId),
        });
      },

      clearFavorites: () => set({ addedToFavorite: [] }),
    }),
    { name: "favorite-storage" }
  )
);

export default useFavorite;
