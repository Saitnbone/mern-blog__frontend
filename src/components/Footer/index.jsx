import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-block"]}>
        <div className={styles.inner}>
          <div className={styles["logo-block"]}>
            <Link className={styles.logo} to="/">
              <div>AG Blog</div>
            </Link>
          </div>
          <ul className={styles["contacts-block"]}>
            <li>
              <a
                href="https://github.com/Saitnbone"
                target="_blank"
                rel="noopener noreferrer"
                className={styles["contacts-link"]}
              >
                https://github.com/Saitnbone
              </a>
            </li>
            <li>
              <a
                href="mailto:golodinaleksandr@gmail.com"
                className={styles["contacts-link"]}
              >
                golodinaleksandr@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
