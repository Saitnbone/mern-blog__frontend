import { Box } from "@mui/material";
import styles from "./styles.module.scss";
import { MdOutlineAttachEmail } from "react-icons/md";

export const EmailIcon = () => {
  return (
    <Box
      component="span"
      sx={{
        color: "text.primary",
      }}
    >
      <MdOutlineAttachEmail className={styles["email-icon"]} />
    </Box>
  );
};
