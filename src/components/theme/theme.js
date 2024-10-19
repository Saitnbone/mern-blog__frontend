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
      customBackground: "#f5f5f5",
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
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
      customBackground:
        "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
    },
    text: {
      primary: "#000000", 
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
