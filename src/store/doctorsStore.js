import { create } from "zustand";
import axios from "../axios";

export const useDoctorsStore = create((set) => ({
  groups: [],
  doctors: [],

  /////////////////////////// DOCTOR GROUPS ///////////////////////////
  //fetch Groups
  fetchGroups: async () => {
    set({ groups: [] });
    const { data } = await axios.get("/doctorsGroups");
    set({ groups: data });
  },

  /////////////////////////// DOCTORS ///////////////////////////
  //fetch Doctors
  fetchDoctors: async (groupId) => {
    set({ doctors: [] });
    const { data } = await axios.get(`/doctors/${groupId}`);
    set({ doctors: data });
  },
}));
