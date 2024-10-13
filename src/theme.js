// Imports
import { createTheme } from "@mui/material/styles";

// Settings for screens
export const theme = createTheme({
  shadows: ["none"],
  palette: {
    primary: {
      main: "#4361ee",
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
