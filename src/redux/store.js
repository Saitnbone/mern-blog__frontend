// Импорты
import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slices/posts";

// Хранилизе состояний
const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export default store;
