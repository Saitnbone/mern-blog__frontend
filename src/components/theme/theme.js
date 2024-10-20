// Imports
import { createTheme } from "@mui/material/styles";

// Dark theme settings
export const darkTheme = createTheme({
  shadows: ["none", "none"],
  palette: {
    mode: "dark",
    primary: {
      main: "#4361ee",
    },
    background: {
      default: "#121212",
      paper: "#121212",
      customBackground: "#1a1a1a",
    },
    text: {
      primary: "#ffffff",
    },
    border: { 
      default: '#1a1a1a'
    }
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
  shadows: ["none", "none"],
  palette: {
    mode: "light",
    primary: {
      main: "#4361ee",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
      customBackground: "#ffffff",
    },
    text: {
      primary: "#000000",
    },
    border: { 
      default: '#dedede;'
    }
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
