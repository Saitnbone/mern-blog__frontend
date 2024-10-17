import styles from "./styles.module.scss";
import { FooterMobile } from "../footer/footer-mobile";
import { Link } from "react-router-dom";
import { useAuth } from "../auth-context";
import { useLogout } from "../../utils/hooks/useUser";
import { FaUser } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { RiLogoutBoxFill } from "react-icons/ri";
import { FaMoon } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { toggleTheme } from "../../utils/redux/slices/theme";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

export const NavigationList = ({ menuId }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.dropdown[menuId]);
  const { isAuth } = useAuth();
  const logoutMutation = useLogout();

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <Box
          component="div"
          sx={{
            inlineSize: "100vw",
            blockSize: "100vh",
            backgroundColor: "background.default",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <Box
            component="div"
            sx={{
              position: "fixed",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              inlineSize: "100vw",
              blockSize: "60vh",
              backgroundColor: "background.default",
              zIndex: "1",
            }}
          >
            <Box component="div" sx={{ padding: "20px" }}>
              <Typography
                variant="h2"
                sx={{
                  color: "text.primary",
                }}
              >
                Навигация
              </Typography>
              <List
                style={{ listStyleType: "none" }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  fontSize: "21px",
                  color: "text.primary",
                }}
              >
                <ListItem
                  component={Link}
                  to="/profile"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "21px",
                    color: "text.primary",
                    "&:active": {
                      opacity: "0.5",
                    },
                    "&:hover": {
                      cursor: "pointer",
                      opacity: "0.5",
                    },
                  }}
                >
                  <ListItemIcon>
                    <FaUser />
                  </ListItemIcon>
                  <ListItemText primary="Профиль"></ListItemText>
                </ListItem>
                <ListItem
                  component={Link}
                  to="/add-post"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "21px",
                    color: "text.primary",
                    "&:active": {
                      opacity: "0.5",
                    },
                    "&:hover": {
                      cursor: "pointer",
                      opacity: "0.5",
                    },
                  }}
                >
                  <ListItemIcon>
                    <FaPencil />
                  </ListItemIcon>
                  <ListItemText primary="Написать статью"></ListItemText>
                </ListItem>
                <ListItem
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "21px",
                    color: "text.primary",
                    "&:active": {
                      opacity: "0.5",
                    },
                    "&:hover": {
                      cursor: "pointer",
                      opacity: "0.5",
                    },
                  }}
                  onClick={handleTheme}
                >
                  <ListItemIcon
                    sx={{
                      color: "",
                    }}
                  >
                    <FaMoon />
                  </ListItemIcon>
                  <ListItemText primary="Сменить тему"></ListItemText>
                </ListItem>
                <ListItem
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "21px",
                    color: "text.primary",
                    "&:active": {
                      opacity: "0.5",
                    },
                    "&:hover": {
                      cursor: "pointer",
                      opacity: "0.5",
                    },
                  }}
                >
                  <ListItemIcon>
                    <RiLogoutBoxFill />
                  </ListItemIcon>
                  <ListItemText primary="Выйти"></ListItemText>
                </ListItem>
              </List>
              <Box
                component="div"
                sx={{
                  marginBlockStart: "40px",
                }}
              >
                <FooterMobile />
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};
// return (
//   <>
//     {isOpen && (
//       <div className={styles["bg-block"]}>
//         <div className={styles["nav-block"]}>
//           <div className={styles.wrapper}>
//             <h2 className={styles.title}>Навигация</h2>
//       {/* {!isAuth ? (
//   <ul className={styles["nav-list"]}>
//     <li className={styles["nav-list__item"]}>
//       <Link to="/add-post">Написать статью</Link>
//     </li>
//     <li className={styles["nav-list__item"]}>
//           <FaMoon />
//           Сменить тему
//         </li>
//     <li className={styles["nav-list__item"]}>Войти</li>
//   </ul>
// ) : (
//   <ul className={styles["nav-list"]}>
//     <li className={styles["nav-list__item"]}>
//       <Link to="/profile">Профиль</Link>
//     </li>
//     <li className={styles["nav-list__item"]}>
//       <Link to="/add-post">Написать статью</Link>
//     </li>
//     <li className={styles["nav-list__item"]}>
//           <FaMoon />
//           Сменить тему
//         </li>
//     <li className={styles["nav-list__item"]}>Выйти</li>
//   </ul>
// )} */}
//             <ul className={styles["nav-list"]}>
//               <li className={styles["nav-list__item"]}>
//                 <FaUser />
//                 <Link to="/profile">Профиль</Link>
//               </li>
//               <li className={styles["nav-list__item"]}>
//                 <FaPencil />
//                 <Link to="/add-post">Написать статью</Link>
//               </li>
//               <li onClick={handleTheme} className={styles["nav-list__item"]}>
//                 <FaMoon />
//                 Сменить тему
//               </li>
//               <li className={styles["nav-list__item"]}>
//                 <RiLogoutBoxFill />
//                 <span>Выйти</span>
//               </li>
//             </ul>
//           </div>
//           <div className={styles["nav-list__footer"]}>
//             <FooterMobile />
//           </div>
//         </div>
//       </div>
//     )}
//   </>
// );
// };
