import { create } from "zustand";
import axios from "../axios";
import { toast } from "react-toastify";

export const useAuthStore = create((set) => ({
  user: {},
  isAuth: false,
  isLoading: false,
  /////////////////////////// AUTH ///////////////////////////

  //LOGIN
  login: async (obj) => {
    set({ isLoading: true });
    try {
      const { data } = await axios.post(`/auth/login`, obj);
      set({ user: data.result });
      console.log(data.result);
      data?.status ? toast.success(data.message) : toast.error(data.message);
    } finally {
      set({ isLoading: false, isAuth: true });
    }
  },

  //LOGOUT
  logout: async () => {
    set({ isLoading: true });
    try {
      const { data } = await axios.post(`/auth/logout`, {});
      set({ user: {} });
      data?.status ? toast.success(data.message) : toast.error(data.message);
    } finally {
      set({ isLoading: false, isAuth: false });
    }
  },
}));
