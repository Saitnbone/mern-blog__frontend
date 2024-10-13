import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { FooterMobile } from "./Footer-mobile/footer-mobile";
import { FooterDesktop } from "./Footer-desktop/footer-desktop";

export const Footer = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>{isMobile ? <FooterMobile /> : <FooterDesktop />}</>
  );
};
