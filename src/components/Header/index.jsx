import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import Container from "@mui/material/Container";
import { useLogout, useCheckAuth } from "../../services/hooks/useUser";
// import { useDispatch, useSelector } from "react-redux";
// import { logout, selectIsAuth } from "../../redux/slices/auth";

export const Header = () => {

  // const dispatch = useDispatch();
  // const isAuth = useSelector(selectIsAuth);

  // const onClickLogout = () => {
  //   dispatch(logout());
  //   localStorage.removeItem("token");
  // };

  const { data: isAuth } = useCheckAuth(); 
  const logoutMutation = useLogout(); 

  const onClickLogout = () => { 
    logoutMutation.mutate();
  }

  return (
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
  );
};
