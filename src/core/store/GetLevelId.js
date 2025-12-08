
import { create } from "zustand";

const useLevelStore = create((set) => ({
  levelId: null, 
  setLevelId: (id) => set({ levelId: id }), 
}))

export default useLevelStore;
