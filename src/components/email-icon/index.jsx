import styles from "./EmailIcon.module.scss";
import { MdOutlineAttachEmail } from "react-icons/md";

export const EmailIcon = () => {
  return <MdOutlineAttachEmail className={styles["email-icon"]} />;
};
