import React from "react";
import { Box, Link as MuiLink, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import { useAuth } from "../auth-context";
import EditIcon from "@mui/icons-material/Edit";
import { ProfileIcon } from "../profile-icon";
import { toggleElement } from "../../utils/redux/slices/dropDown-elements";
import { useDispatch } from "react-redux";

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
        paddingTop: "15px",
        paddingBottom: "15px",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* logo */}
          <MuiLink
            component={Link}
            to="/"
            underline="none"
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
          </MuiLink>
          {/* buttons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
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

// return (
//   <>
//     {isMobile ? (
//       <MobileHeader menuId="menu-id" />
//     ) : (
//       <header className={styles.root}>
//         <Container maxWidth="lg">
//           <div className={styles.inner}>
//             <Link className={styles.logo} to="/">
//               <div>AG Blog</div>
//             </Link>
//             <div className={styles.buttons}>
//               {isAuth ? (
//                 <>
//                   <Link to="/add-post">
//                     <Button variant="contained">Написать статью</Button>
//                   </Link>
//                   <Button
//                     onClick={onClickLogout}
//                     variant="contained"
//                     color="error"
//                     disabled={logoutMutation.isLoading}
//                   >
//                     Выйти
//                   </Button>
//                 </>
//               ) : (
//                 <>
//                   <Link to="/auth/login">
//                     <Button variant="outlined">Войти</Button>
//                   </Link>
//                   <Link to="/auth/registration">
//                     <Button variant="contained">Создать аккаунт</Button>
//                   </Link>
//                 </>
//               )}
//             </div>
//           </div>
//         </Container>
//       </header>
//     )}
//   </>
// );
