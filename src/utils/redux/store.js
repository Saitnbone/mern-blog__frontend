import { configureStore } from "@reduxjs/toolkit";
import toggleStateReducer from "./slices/dropDown-elements";

export const rootStore = configureStore({
  reducer: {
    dropdown: toggleStateReducer,
  },
});
