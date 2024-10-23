import { configureStore } from "@reduxjs/toolkit";
import toggleStateReducer from "./slices/dropDown-elements";
import themeReducer from "./slices/theme";

export const rootStore = configureStore({
  reducer: {
    dropdown: toggleStateReducer,
    changeTheme: themeReducer,
  },
});
