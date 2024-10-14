// Imports
import React from "react";
import Grid from "@mui/material/Grid";
import { Post } from "../components/Post";
import { TagsBlock } from "../components/TagsBlock";
import { CommentsBlock } from "../components/CommentsBlock";
import { useGetPosts, useGetTags } from "../utils/hooks/usePosts";
import { useAuth } from "../components/AuthContext";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavigationList } from "../components/NavList";

export const Home = () => {
  const { data: posts, isLoading: isPostsLoading } = useGetPosts();
  const { data: tags, isLoading: isTagsLoading } = useGetTags();
  const { user: userData, userId } = useAuth();

  const currentUser = userId;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Show skeleton while data is loading
  if (isPostsLoading) {
    return (
      <Grid container spacing={4}>
        <Grid item xs={8}>
          {[...Array(5)].map((_, index) => (
            <Post key={index} isLoading={true} />
          ))}
        </Grid>
      </Grid>
    );
  }

  // Main render after successful data loading
  return (
    <>
      <NavigationList menuId="menu-id" />
      <Grid container spacing={4}>
        <Grid item xs={12} md={isMobile ? 12 : 8} lg={isMobile ? 12 : 8}>
          {posts.map((obj) => (
            <Post
              key={obj._id}
              _id={obj._id}
              title={obj.title}
              imageUrl={
                obj.imageUrl ? `http://localhost:4444${obj.imageUrl}` : ""
              }
              user={obj.user}
              createdAt={obj.createdAt}
              viewsCount={obj.viewsCount}
              commentsCount={obj.commentsCount}
              tags={obj.tags}
              isEditable={currentUser ? currentUser === obj.user._id : null}
              isLoading={false}
            />
          ))}
        </Grid>
        {!isMobile && (
          <Grid item md={4} lg={4}>
            <TagsBlock
              items={tags ? tags.items : []}
              isLoading={isTagsLoading}
            />
            <CommentsBlock
              items={[
                {
                  user: {
                    fullName: "Вася Пупкин",
                    avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
                  },
                  text: "Это тестовый комментарий",
                },
                {
                  user: {
                    fullName: "Иван Иванов",
                    avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
                  },
                  text: "Когда отображается три или больше строк, аватарка не выравнивается по верху.",
                },
                {
                  user: {
                    fullName: "Стас Квашнин",
                    avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
                  },
                  text: "Казарече",
                },
              ]}
              isLoading={false}
            />
          </Grid>
        )}
      </Grid>
    </>
  );
};
