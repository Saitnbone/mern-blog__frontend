import { createSlice } from "@reduxjs/toolkit";

const initialsState = {
  posts: {
    items: [],
    status: "loading",
  },
  tags: {
    items: [],
    status: "loading ",
  },
  comments: {
    items: [],
    status: "loading ",
  },
};

const postSlice = createSlice({
  name: "posts",
  initialsState,
  reducer: {},
});


export const postReducer = postSlice.reducer