import { useState } from "react";
import { Container } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { ProfileIcon } from "../../ProfileIcon";
import EditIcon from "@mui/icons-material/Edit";
import styles from "./Header-mobile.module.scss";

export const MobileHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const showProfileList = (event) => {
    setAnchorEl(event.currentTarget)
  };
  return (
    <header className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            <div>AG Blog</div>
          </Link>
          <div className={styles.buttons}>
            <Link to="/add-post">
              <EditIcon sx={{ fontSize: 27, color: "#4361ee" }} />
            </Link>
            <span onClick={showProfileList}>
              <ProfileIcon />
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};
