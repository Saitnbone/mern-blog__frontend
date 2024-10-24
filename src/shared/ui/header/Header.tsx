import React from "react";
import { Box, Link as MuiLink, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
// import { useAuth } from "../auth-context";
import EditIcon from "@mui/icons-material/Edit";
// import { ProfileIcon } from "../profile-icon";
// import { toggleElement } from "../../utils/redux/slices/dropDown-elements";
import { useDispatch } from "react-redux";
import styles from "./styles.module.scss";

export const Header = ({ menuId }) => {
  const dispatch = useDispatch();
  const { isAuth } = useAuth();

  const handleElement = () => {
    dispatch(toggleElement(menuId));
  };
  return (
    <Box
      component="header"
      sx={{
        backgroundColor: "background.default",
      }}
      className={styles.header}
    >
      <Container maxWidth="lg">
        <Box className={styles.wrapper}>
          <MuiLink
            component={Link}
            to="/"
            underline="none"
            sx={{
              backgroundColor: "text.primary",
              color: "background.paper",
              "&:hover": {
                backgroundColor: "primary.main",
              },
            }}
            className={styles["header-link"]}
          >
            AG Blog
          </MuiLink>
          <Box className={styles["buttons-block"]}>
            <IconButton component={Link} to="/add-post">
              <EditIcon sx={{ fontSize: 27, color: "primary.main" }} />
            </IconButton>
            <IconButton onClick={handleElement}>
              <ProfileIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
