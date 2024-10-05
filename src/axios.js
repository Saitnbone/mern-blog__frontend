// Imports
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4444",
});

// Middleware for checking user authentication
instance.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem("token");

  return config;
});

export default instance;
