import { create } from "zustand";
import axios from "../axios";

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
      const { data } = await axios.get(`/patients?pn=${pn}`);
      set({ patients: data, isLoading: false });
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
    const { data } = await axios.post(`/patients/add`, patientForm);

    set({ isLoading: false });
    return data.result;
  },
}));
