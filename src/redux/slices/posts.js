import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

// Получение постов
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const { data } = await axios.get("/posts");
  return data;
});

//  Получение тегов
export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const { data } = await axios.get("/tags");
  return data;
});

// Удаление поста
export const fetchRemovePosts = createAsyncThunk(
  "/posts/fetchRemovePosts",
  async (id) => {
    const { data } = await axios.delete(`/posts/${id}`);
    return data;
  }
);

//  Инициализация состояния
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

// Слой постов
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Получение постов
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

      // Получение тегов
      .addCase(fetchTags.pending, (state) => {
        state.tags.status = "loading";
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.tags.status = "succeeded";
        state.tags.items = action.payload;
      })
      .addCase(fetchTags.rejected, (state) => {
        state.tags.status = "failed";
      })

      // Удаление постов
      .addCase(fetchRemovePosts.pending, (state, action) => {
        state.posts.items = state.posts.items.filter(
          (obj) => obj._id !== action.meta.arg
        );
      });
  },
});

export const postsReducer = postSlice.reducer;
