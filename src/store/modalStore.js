import { create } from "zustand";

export const useModalStore = create((set) => ({
  isOpen: false,
  activeChild: null,
  title: "",

  //Open modal
  open: (child, title) => {
    set({ activeChild: child, title: title, isOpen: true });
  },

  //close modal
  close: () => {
    set({ isOpen: false });
  },
}));
