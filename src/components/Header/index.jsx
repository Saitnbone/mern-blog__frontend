import React from "react";
import Button from "@mui/material/Button";
import { useTheme, createTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import Container from "@mui/material/Container";
import { useLogout } from "../../utils/hooks/useUser";
import { useAuth } from "../AuthContext";
import { MobileHeader } from "./Header-mobile/mobile-header";

export const Header = () => {
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
  const { isAuth } = useAuth();
  const logoutMutation = useLogout();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const onClickLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <>
      {isMobile ? (
        <MobileHeader />
      ) : (
        <header className={styles.root}>
          <Container maxWidth="lg">
            <div className={styles.inner}>
              <Link className={styles.logo} to="/">
                <div>AG Blog</div>
              </Link>
              <div className={styles.buttons}>
                {isAuth ? (
                  <>
                    <Link to="/add-post">
                      <Button variant="contained">Написать статью</Button>
                    </Link>
                    <Button
                      onClick={onClickLogout}
                      variant="contained"
                      color="error"
                      disabled={logoutMutation.isLoading}
                    >
                      Выйти
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/auth/login">
                      <Button variant="outlined">Войти</Button>
                    </Link>
                    <Link to="/auth/registration">
                      <Button variant="contained">Создать аккаунт</Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </Container>
        </header>
      )}
    </>
  );
};
