import { DiGithubBadge } from "react-icons/di";
import { Box } from "@mui/material";
import styles from "./styles.module.scss";

export const GitHubIcon = () => {
  return (
    <Box
      component="span"
      sx={{
        color: "text.primary",
      }}
    >
      <DiGithubBadge className={styles["github-icon"]} />
    </Box>
  );
};
