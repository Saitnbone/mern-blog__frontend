import React from "react";
import clsx from "clsx";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import EyeIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import CommentIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { UserInfo } from "../user-info";
import { PostSkeleton } from "./Skeleton";
import { useMutation } from "@tanstack/react-query";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";

export const Post = ({
  _id,
  title,
  createdAt,
  imageUrl,
  user,
  viewsCount,
  commentsCount,
  tags,
  children,
  isFullPost,
  isLoading,
  isEditable,
}) => {
  const theme = useTheme();
  const { mutate: removePost } = useMutation();

  if (isLoading) {
    return <PostSkeleton />;
  }
  const onClickRemove = () => {
    removePost(_id);
  };

  return (
    <Box
      component="div"
      sx={{
        backgroundColor: "background.customBackground",
        border: `1px solid ${theme.palette.border.default}`,
      }}
      className={clsx(styles.root, { [styles.rootFull]: isFullPost })}
    >
      {isEditable && (
        <div className={styles.editButtons}>
          <Link to={`/posts/${_id}/edit`}>
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton onClick={onClickRemove} color="secondary">
            <DeleteIcon />
          </IconButton>
        </div>
      )}
      {imageUrl && (
        <img
          className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
          src={imageUrl}
          alt={title}
        />
      )}
      <div className={styles.wrapper}>
        <Link to="/profile">
          <UserInfo {...user} additionalText={createdAt} />
        </Link>
        <div className={styles.indention}>
          <Box
            component="h2"
            sx={{
              color: "text.primary",
            }}
            className={clsx(styles.title, { [styles.titleFull]: isFullPost })}
          >
            {isFullPost ? title : <Link to={`/posts/${_id}`}>{title}</Link>}
          </Box>
          <ul className={styles.tags}>
            {tags.map((name) => (
              <li key={name}>
                <a href={`/tag/${name}`}>#{name}</a>
              </li>
            ))}
          </ul>
          {children && <div className={styles.content}>{children}</div>}
          <ul className={styles.postDetails}>
            <li>
              <EyeIcon />
              <span>{viewsCount}</span>
            </li>
            <li>
              <CommentIcon className={styles["comment-icon"]} />
              <span>{commentsCount}</span>
            </li>
          </ul>
        </div>
      </div>
    </Box>
  );
};
