/* Import section */
import { create } from "zustand";
/* MacStore hook */
export const useMacStore = create((set) => ({
  /* Color section */
  color: "#2e2c2e",
  setColor: (color) => set({ color }),
  /* Scale section */
  scale: 0.08,
  setScale: (scale) => set({ scale }),
  /* Reset  */
  reset: () => set({ color: "#e2c2e", scale: 0.08 }),
}));
