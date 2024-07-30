import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["logo-block"]}>
        <a className={styles.logo} href="/">
          <div>AG Blog</div>
        </a>
      </div>
      <div className={styles["contacts-block"]}></div>
    </footer>
  );
};
