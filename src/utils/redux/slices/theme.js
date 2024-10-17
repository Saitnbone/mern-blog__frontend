import { createSlice } from "@reduxjs/toolkit";

const theme = createSlice({
  name: "theme",
  initialState: {
    isActive: false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isActive = !state.isActive;
    },
  },
});

const themeReducer = theme.reducer;

export const { toggleTheme } = theme.actions;

export default themeReducer;
