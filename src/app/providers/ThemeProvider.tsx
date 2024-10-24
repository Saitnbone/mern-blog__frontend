import { darkTheme, lightTheme } from "shared/ui/theme";
import { ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";

export const AppThemeProvider = () => {
  const isDarkMode = useSelector((state) => state.changeTheme.isActive);

  const appTheme = isDarkMode ? darkTheme : lightTheme;
  return <ThemeProvider theme={appTheme}>{children}</ThemeProvider>;
};
