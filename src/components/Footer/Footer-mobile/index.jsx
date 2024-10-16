import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { GitHubIcon } from "../../github-icon";
import { EmailIcon } from "../../email-icon";

export const FooterMobile = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles["footer-block"]}>
          <div className={styles.inner}>
            <div className={styles["logo-block"]}>
              <Link className={styles.logo} to="/">
                <div>AG Blog</div>
              </Link>
            </div>
            <ul className={styles["contacts"]}>
              <li className={styles["contacts__github"]}>
                <GitHubIcon />
                <a
                  href="https://github.com/Saitnbone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["contacts-link"]}
                >
                  https://github.com/Saitnbone
                </a>
              </li>
              <li className={styles["contacts__email"]}>
                <EmailIcon />
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
      </div>
    </footer>
  );
};
