import styles from "./NavList.module.scss";
import { FooterMobile } from "../Footer/Footer-mobile/footer-mobile";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { useLogout } from "../../utils/hooks/useUser";
import { FaUser } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { RiLogoutBoxFill } from "react-icons/ri";
import { useSelector } from "react-redux";

export const NavigationList = ({ menuId }) => {
  const isOpen = useSelector((state) => state.dropdown[menuId]);
  const { isAuth } = useAuth();
  const logoutMutation = useLogout();

  return (
    <>
      {isOpen && (
        <div className={styles["nav-block"]}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>Навигация</h2>
            {/* {!isAuth ? (
          <ul className={styles["nav-list"]}>
            <li className={styles["nav-list__item"]}>
              <Link to="/add-post">Написать статью</Link>
            </li>
            <li className={styles["nav-list__item"]}>Войти</li>
          </ul>
        ) : (
          <ul className={styles["nav-list"]}>
            <li className={styles["nav-list__item"]}>
              <Link to="/profile">Профиль</Link>
            </li>
            <li className={styles["nav-list__item"]}>
              <Link to="/add-post">Написать статью</Link>
            </li>
            <li className={styles["nav-list__item"]}>Выйти</li>
          </ul>
        )} */}
            <ul className={styles["nav-list"]}>
              <li className={styles["nav-list__item"]}>
                <FaUser />
                <Link to="/profile">Профиль</Link>
              </li>
              <li className={styles["nav-list__item"]}>
                <FaPencil />
                <Link to="/add-post">Написать статью</Link>
              </li>
              <li className={styles["nav-list__item"]}>
                <RiLogoutBoxFill />
                <span>Выйти</span>
              </li>
            </ul>
          </div>
          <div>
            <FooterMobile />
          </div>
        </div>
      )}
    </>
  );
};
