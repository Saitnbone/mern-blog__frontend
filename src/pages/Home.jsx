import React from "react";
import Grid from "@mui/material/Grid";
import { Post } from "../components/Post";
import { TagsBlock } from "../components/TagsBlock";
import { CommentsBlock } from "../components/CommentsBlock";
import { useGetPosts, useGetTags } from "../services/hooks/usePosts";
import { useEffect } from "react";

export const Home = () => {
  const {
    data: posts,
    isLoading: isPostsLoading,
    isError: isPostsError,
  } = useGetPosts();
  const {
    data: tags,
    isLoading: isTagsLoading,
    isError: isTagsError,
  } = useGetTags();

  if (isPostsLoading || isTagsLoading) {
    return <div>Загрузка данных...</div>;
  }

  // Обработка ошибок
  if (isPostsError || isTagsError) {
    return <div>Ошибка при загрузке данных</div>;
  }

  if (!posts || posts.length === 0) {
    return <div>Посты не найдены.</div>;
  }

  // Показ скелетона, пока данные загружаются
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

  // Основной рендеринг после успешной загрузки данных
  return (
    <>
      <Grid container spacing={4}>
        <Grid xs={8} item>
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
              isEditable={obj.isEditable}
              isLoading={false}
            />
          ))}
        </Grid>
        <Grid xs={4} item>
          <TagsBlock items={tags ? tags.items : []} isLoading={isTagsLoading} />
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
      </Grid>
    </>
  );
};
