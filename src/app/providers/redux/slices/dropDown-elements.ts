import { createSlice } from "@reduxjs/toolkit";

const toggleState = createSlice({
  name: "dropdown",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleElement: (state, action) => {
      const id = action.payload;
      state[id] = !state[id];
    },
    openElement: (state, action) => {
      const id = action.payload;
      state[id] = true;
    },
    closeElement: (state, action) => {
      const id = action.payload;
      state[id] = false;
    },
  },
});

const toggleStateReducer = toggleState.reducer;

export const { toggleElement, openElement, closeElement } = toggleState.actions;

export default toggleStateReducer;
