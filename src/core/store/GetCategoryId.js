import { create } from "zustand";

const useCategoryId = create((set) => ({
    categoryId: [],  
    setCategoryId: (ids) => set({ categoryId: ids }),
  }));
  
export default useCategoryId;
