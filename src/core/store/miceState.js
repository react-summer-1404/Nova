
import { create } from "zustand";

const useMiceState = create((set) => ({
    activeMice: null, 
  setActiveMice: (key) => set({ activeMice: key }), 
  stopAll: () => set({ activeMice: null }),
}))

export default useMiceState;
