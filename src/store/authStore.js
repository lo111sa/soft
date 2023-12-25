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
      set({ user: data?.result });
      data?.status ? toast.success(data.message) : toast.error(data.message);
    } finally {
      set({ isLoading: false, isAuth: true });
    }
  },

  //CHECK IF USER IS LOGGED IN
  checkAuth: async () => {
    set({ isLoading: true });
    try {
      const { data } = await axios.get(`/auth/check-auth`);
      console.log(data);
      set({ user: data?.result, isAuth: data.result?.authenticated });
    } finally {
      set({ isLoading: false });
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
