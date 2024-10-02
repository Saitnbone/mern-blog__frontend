// API requests that are associated with the user

// imports
import axios from "../../axios";

// Request to register a new user
export const fetchRegister = async (params) => {
  const { data } = await axios.post("/auth/registration", params);

  return data;
};

// For subsequent checks, so that it doesn’t get thrown out when the page is refreshed
export const fetchAuthMe = async (params) => {
  const { data } = await axios.get("/auth/me", params);

  return data;
};

// User authorization check
export const fetchAuth = async (params) => {
  const token = localStorage.getItem("token");

  const { data } = await axios.post("/auth/login", params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
