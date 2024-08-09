// Импорты
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

// Запрос авторизации
export const fetchAuth = createAsyncThunk("/auth/fetchAuth", async (params) => {
  const token = localStorage.getItem("token");

  const { data } = await axios.post("/auth/login", params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
});

const initialState = {
  auth: {
    data: null,
    status: "empty",
  },
};

const authSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuth.pending, (state) => {
        state.auth.status = "waiting";
        state.data = null;
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.auth.status = "suceeded";
        state.data = action.payload;
      })
      .addCase(fetchAuth.rejected, (state) => {
        state.auth.status = "error";
        state.data = null;
      });
  },
});

export const selectIsAuth = (state) => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;
