// Imports
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.scss";
import { Provider } from "react-redux";
import { rootStore } from "./utils/redux/store";
import { AppThemeProvider } from "./components/theme";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <CssBaseline />
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={rootStore}>
          <AppThemeProvider>
            <App />
          </AppThemeProvider>
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  </>
);
