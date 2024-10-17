import { CgProfile } from "react-icons/cg";
import { Box } from "@mui/material";
import styles from "./styles.module.scss";

export const ProfileIcon = ({ onClick }) => {
  return (
    <Box
      component="span"
      onClick={onClick}
      sx={{
        blockSize: "37px",
        inlineSize: "40px",
        color: "text.primary",
        "&:hover": {
          opacity: "0.5",
          cursor: "pointer",
        },
      }}
    >
      <CgProfile className={styles["profile-icon"]} />
    </Box>
  );
};
