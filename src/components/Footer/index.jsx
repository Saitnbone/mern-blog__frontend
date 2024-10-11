import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
// import { GitHubIcon } from "../GithubIcon";
import { EmailIcon } from "../EmailIcon";
import { useTheme, createTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { FooterMobile } from "./Footer-mobile/footer-mobile";
import { FooterDesktop } from "./Footer-desktop/footer-desktop";

export const Footer = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        sm: 600,
        md: 700,
        lg: 1200,
        xl: 1600,
      },
    },
  });
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>{isMobile ? <FooterMobile /> : <FooterDesktop />}</>
  );
};
