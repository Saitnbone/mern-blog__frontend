import styles from "./styles.module.scss";
import { Box } from "@mui/material";
import { Logo } from "../../logo";
import { ContactsList } from "../contacts-list";

export const FooterDesktop = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "background.default",
      }}
      className={styles.footer}
    >
      <div className={styles["footer-block"]}>
        <div className={styles.inner}>
          <Logo />
          <ContactsList />
        </div>
      </div>
    </Box>
  );
};
