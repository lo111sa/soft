import { create } from "zustand";
import axios from "../axios";
import { toast } from "react-toastify";

export const usePatientsStore = create((set) => ({
  patientInfo: {},
  patients: [],
  isLoading: false,
  /////////////////////////// PATIENTS ///////////////////////////

  //Set Patient info
  setPatientInfo: async (info) => {
    set({ patientInfo: info });
  },

  //fetch Patient info
  searchPatients: async (pn) => {
    if (pn !== "") {
      set({ patients: [], isLoading: true });
      try {
        const { data } = await axios.get(`/patients?pn=${pn}`);
        set({ patients: data.result, isLoading: false });
      } catch (error) {
        console.log(error);
      }
    } else {
      set({ patients: [], patientInfo: {} });
    }
  },

  //Clear patient info
  clearPatientInfo: () => {
    set({ patientInfo: {} });
  },

  //Add New Patient
  addPatient: async (patientForm) => {
    set({ isLoading: true });
    try {
      const { data } = await axios.post(`/patients/add`, patientForm);
      data?.status ? toast.success(data.message) : toast.error(data.message);
      return data.result;
    } finally {
      set({ isLoading: false });
    }
  },
}));
