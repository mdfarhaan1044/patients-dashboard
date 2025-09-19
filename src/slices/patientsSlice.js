import { createSlice } from "@reduxjs/toolkit";
import patientsData from "../data/patients.json";

const patientsSlice = createSlice({
    name: "patients",
    initialState: {
        list: patientsData,
        selectedPatient: null,
    },
    reducers: {
        selectPatient: (state, action) => {
            state.selectedPatient = action.payload;
        },
        clearSelectedPatient: (state) => {
            state.selectedPatient = null;
        },
    },
});

export const { selectPatient, clearSelectedPatient } = patientsSlice.actions;
export default patientsSlice.reducer;
