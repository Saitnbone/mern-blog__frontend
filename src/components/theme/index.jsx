import { lightTheme, darkTheme } from "./theme";
import { ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";

export const AppThemeProvider = ({ children }) => {
  const isDarkMode = useSelector((state) => state.changeTheme.isActive);

  console.log(isDarkMode);
  // Выбираем тему в зависимости от состояния
  const appTheme = isDarkMode ? darkTheme : lightTheme;

  return <ThemeProvider theme={appTheme}>{children}</ThemeProvider>;
};
