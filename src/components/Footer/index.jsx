import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
// import { FooterMobile } from "./footer-mobile/footer-mobile";
import { FooterMobile } from "./footer-mobile";
import { FooterDesktop } from "./footer-desktop";

export const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return <>{isMobile ? <FooterMobile /> : <FooterDesktop />}</>;
};
