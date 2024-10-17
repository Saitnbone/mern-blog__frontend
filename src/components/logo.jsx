import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Box
      component={Link}
      to="/"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        blockSize: "35px",
      }}
    >
      <Box
        component="div"
        sx={{
          backgroundColor: "text.primary",
          color: "background.paper",
          fontWeight: "bold",
          lineHeight: "35px",
          blockSize: "35px",
          textTransform: "uppercase",
          letterSpacing: "0.15px",
          borderRadius: "5px",
          padding: "0 10px",
          "&:hover": {
            backgroundColor: "primary.main",
          },
        }}
      >
        AG Blog
      </Box>
    </Box>
  );
};
