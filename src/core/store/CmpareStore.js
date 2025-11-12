import { create } from "zustand";

const useCompare = create((set) => ({
  compareChosen: [],

  addCompareCourse: (courseId) =>
    set((state) => ({
      compareChosen: state.compareChosen.includes(state.courseId)
        ? state.compareChosen.filter((p) => p !== courseId)
        : [...state.compareChosen, courseId],
    })),

    reset:()=>set({ compareChosen: []})
}));
 export default useCompare