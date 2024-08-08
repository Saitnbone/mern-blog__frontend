import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const { data } = await axios.get("/posts");
  return data;
});

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const { data } = await axios.get("/tags");
  return data;
});

const initialState = {
  posts: {
    items: [],
    status: "empty", // начальное состояние
  },
  tags: {
    items: [],
    statu: "empty",
  },
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.posts.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts.status = "succeeded";
        state.posts.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.posts.status = "failed";
      })
      .addCase(fetchTags.pending, (state) => {
        state.tags.status = "loading";
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.tags.status = "succeeded";
        state.tags.items = action.payload;
      })
      .addCase(fetchTags.rejected, (state) => {
        state.tags.status = "failed";
      });
  },
});

export const postsReducer = postSlice.reducer;
