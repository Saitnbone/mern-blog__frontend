import { CgProfile } from "react-icons/cg";
import styles from "./Profile.module.scss";

export const ProfileIcon = ({onClick}) => {
  return (
    <span onClick={onClick}>
      <CgProfile className={styles["profile-icon"]} />;
    </span>
  );
};
