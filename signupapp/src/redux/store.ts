import { configureStore } from "@reduxjs/toolkit";
import SignupReducer from "./SignupSlice";

export const store = configureStore({
  reducer: {
    signup: SignupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
