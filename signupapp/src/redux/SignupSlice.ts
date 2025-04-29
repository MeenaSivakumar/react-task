import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface signUpState {
  email: string;
  firstName: string;
  lastName: string;
  city: string;
  country: string;
  password: string;
}
const initialState: signUpState = {
  email: "",
  firstName: "",
  lastName: "",
  city: "",
  country: "",
  password: "",
};
export const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },

    setPhoneNumber: (state, action) => {
      state.lastName = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const {
  setEmail,
  setFirstName,
  setLastName,
  setCity,
  setCountry,
  setPassword,
} = signUpSlice.actions;
export default signUpSlice.reducer;
