// Импорты
import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./slices/posts";

// Хранилизе состояний 
const store = configureStore({
    reducer: {
        posts: postReducer
    }
})

export default store