// Импорты
// Imports
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4444",
});

// Мидлвар для проверки авторизованности пользователя
instance.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem("token");

  return config;
});

export default instance;
