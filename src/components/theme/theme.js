// Imports
import { createTheme } from "@mui/material/styles";

// Dark theme settings
export const darkTheme = createTheme({
  shadows: [
    "none",
    // "0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)",
  ],
  palette: {
    mode: "dark",
    primary: {
      main: "#4361ee",
    },
    background: {
      default: "#121212",
      paper: "#1a1a1a",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    button: {
      textTransform: "none",
      fontWeight: 400,
    },
  },
  breakpoints: {
    values: {
      sm: 600,
      md: 700,
      lg: 1200,
      xl: 1600,
    },
  },
});

// Light theme settings
export const lightTheme = createTheme({
  shadows: [
    "none",
    // "0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)",
  ],
  palette: {
    mode: "light",
    primary: {
      main: "#4361ee",
    },
  },
  text: {
    primary: "#000000",
  },
  background: {
    default: "#ffffff",
    paper: "#1c1c1c",
  },
  typography: {
    button: {
      textTransform: "none",
      fontWeight: 400,
    },
  },
  breakpoints: {
    values: {
      sm: 600,
      md: 700,
      lg: 1200,
      xl: 1600,
    },
  },
});
