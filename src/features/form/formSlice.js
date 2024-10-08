import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    FName: "",
    email: "",
    password: "",
    cnf_password: "",
};

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateFormData: (state, action) => {
            return { ...state, ...action.payload };
        },
        clearFormData: () => initialState,
    },
});

export const { updateFormData, clearFormData } = formSlice.actions;

export default formSlice.reducer;