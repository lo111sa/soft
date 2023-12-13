import { create } from "zustand";
import axios from "../axios";
import { formatDate } from "../utils/functions";

export const useAmbulRecordsStore = create((set) => ({
  visits: [],
  amb: [],
  singlePatientInfo: [],
  isLoading: false,

  /////////////////////////// AMBUL RECORDS ///////////////////////////
  //Add Ambul visits
  addVisit: async (obj) => {
    set({ isLoading: true });
    const { data } = await axios.post(`/ambulRecords/add`, obj);
    set((state) => ({
      isLoading: false,
    }));
  },

  //fetch Ambul visits
  fetchVisits: async (query) => {
    set({ visits: [], isLoading: true });
    const { data } = await axios.get(`/ambulRecords?${query}`);
    set({ visits: data, isLoading: false });
  },

  //Fetch Ambul visits
  fetchAmb: async (query) => {
    set({ isLoading: true, amb: [] });
    const { data } = await axios.get(`/ambulRecords/getAmb?${query}`);
    set({ amb: data, isLoading: false });
  },

  //Fetch Single patient visit records
  fetchSinglePatientInfo: async (query) => {
    set({ isLoading: true, singlePatientInfo: [] });
    const { data } = await axios.get(`/ambulRecords/getAmb?${query}`);
    set({ singlePatientInfo: data, isLoading: false });
  },
}));
