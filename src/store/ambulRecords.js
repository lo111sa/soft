import { create } from "zustand";
import axios from "../axios";
import { formatDate } from "../utils/functions";

export const useAmbulRecordsStore = create((set) => ({
  visits: [],
  amb: [],
  singlePatientInfo: [],
  isLoading: false,

  /////////////////////////// AMBUL RECORDS ///////////////////////////
  addVisit: async (obj) => {
    set({ isLoading: true });
    try {
      const { data } = await axios.post(`/ambulRecords/add`, obj);
      // Handle data if needed
    } finally {
      set({ isLoading: false });
    }
  },

  /*   fetchVisits: async (query) => {
    set({ visits: [], isLoading: true });
    try {
      const { data } = await axios.get(`/ambulRecords?${query}`);
      set({ visits: data });
    } finally {
      set({ isLoading: false });
    }
  }, */

  fetchAmb: async (query) => {
    set({ isLoading: true, amb: [] });
    try {
      const { data } = await axios.get(`/ambulRecords/getAmb?${query}`);
      set({ amb: data.result });
    } finally {
      set({ isLoading: false });
    }
  },

  fetchSinglePatientInfo: async (query) => {
    set({ isLoading: true, singlePatientInfo: [] });
    try {
      const { data } = await axios.get(`/ambulRecords/getAmb?${query}`);
      set({ singlePatientInfo: data.result });
    } finally {
      set({ isLoading: false });
    }
  },
}));
