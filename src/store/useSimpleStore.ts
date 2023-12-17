import { create } from "zustand";

interface SimpleState {
  number: number;
  increase: (by: number) => void;
}

export const useSimpleStore = create<SimpleState>((set) => ({
  number: 0,
  increase: () => set((state) => ({ number: state.number + 1 })),
}));
