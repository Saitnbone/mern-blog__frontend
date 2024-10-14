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
  },
});

const toggleStateReducer = toggleState.reducer;

export const { toggleElement } = toggleState.actions;

export default toggleStateReducer;
