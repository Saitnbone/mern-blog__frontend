import React from "react";
import styles from "./styles.module.scss";
import { Avatar } from "@mui/material";

export const UserInfo = ({ avatarUrl, fullName, additionalText }) => {
  return (
    <div className={styles.root}>
      {avatarUrl ? (
        <img
          className={styles.avatar}
          src={avatarUrl || "/noavatar.png"}
          alt={fullName}
        />
      ) : (
        <Avatar className={styles['default-avatar']} sx={{ width: 30, height: 30 }} />
      )}
      <div className={styles.userDetails}>
        <span className={styles.userName}>{fullName}</span>
        <span className={styles.additional}>{additionalText}</span>
      </div>
    </div>
  );
};
