// Импорты
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

// Запрос для логирования пользователя
export const fetchAuth = createAsyncThunk("/auth/fetchAuth", async (params) => {
  const token = localStorage.getItem("token");

  const { data } = await axios.post("/auth/login", params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
});

// Запрос на регистрацию нового пользователя
export const fetchRegister = createAsyncThunk(
  "/auth/fetchRegister",
  async (params) => {
    const { data } = await axios.post("/auth/registration", params);
    return data;
  }
);

// Для последующих проверок, чтобы не выбрасовало при обновлении страницы
export const fetchAuthMe = createAsyncThunk(
  "auth/fetchAuthMe",
  async (params) => {
    const { data } = await axios.get("/auth/me", params);
    return data;
  }
);

const initialState = {
  auth: {
    data: null,
    status: "empty",
  },
};

const authSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
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
      })
      .addCase(fetchRegister.pending, (state) => {
        state.auth.status = "waiting";
        state.data = null;
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.auth.status = "suceeded";
        state.data = action.payload;
      })
      .addCase(fetchRegister.rejected, (state) => {
        state.auth.status = "error";
        state.data = null;
      })
      .addCase(fetchAuthMe.pending, (state) => {
        state.auth.status = "waiting";
        state.data = null;
      })
      .addCase(fetchAuthMe.fulfilled, (state, action) => {
        state.auth.status = "suceeded";
        state.data = action.payload;
      })
      .addCase(fetchAuthMe.rejected, (state) => {
        state.auth.status = "error";
        state.data = null;
      });
  },
});

export const selectIsAuth = (state) => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
