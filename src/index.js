// Импорты
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
// import { Provider } from "react-redux";
// import store from "./redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.scss";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

const queryClient = new QueryClient();

// Подключение проекта
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  </>
);
