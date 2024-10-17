import React from "react";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

import styles from "./styles.module.scss";

export const PostSkeleton = () => {
  return (
    <div className={styles.skeleton}>
      <Stack spacing={1}>
        <Skeleton
          variant="rectangular"
          width="100%"
          height={300}
          animation="wave"
        />
        <div className={styles.skeletonContent}>
          <div className={styles.skeletonUser}>
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              style={{ marginRight: 10 }}
              animation="wave"
            />
            <div className={styles.skeletonUserDetails}>
              <Skeleton
                variant="text"
                width={60}
                height={20}
                animation="wave"
              />
              <Skeleton
                variant="text"
                width={100}
                height={15}
                animation="wave"
              />
            </div>
          </div>
          <div className={styles.skeletonInfo}>
            <Skeleton variant="text" width="80%" height={45} animation="wave" />
            <div className={styles.skeletonTags}>
              <Skeleton
                variant="text"
                width={40}
                height={30}
                animation="wave"
              />
              <Skeleton
                variant="text"
                width={40}
                height={30}
                animation="wave"
              />
              <Skeleton
                variant="text"
                width={40}
                height={30}
                animation="wave"
              />
            </div>
          </div>
        </div>
      </Stack>
    </div>
  );
};
