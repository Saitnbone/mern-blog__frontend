import React from "react";
import { useParams } from "react-router-dom";
import { Post } from "../components/post";
import { Index } from "../components/add-comment";
import { CommentsBlock } from "../components/comments-block";
import { useFullPost } from "../utils/hooks/usePosts";
import Markdown from "react-markdown";

export const FullPost = () => {
  const { id } = useParams();
  console.log(id);

  const { data, isLoading } = useFullPost(id);

  if (isLoading) {
    return <Post isLoading={isLoading} isFullPost />;
  }
  return (
    <>
      <Post
        id={data.id}
        title={data.title}
        imageUrl={data.imageUrl ? `http://localhost:4444${data.imageUrl}` : ""}
        user={data.user}
        createdAt={data.createdAt}
        viewsCount={data.viewsCount}
        commentsCount={data.commentsCount}
        tags={data.tags}
        isFullPost
      >
        <Markdown children={data.text} />
        {/* <p>{data.text}</p> */}
      </Post>
      <CommentsBlock
        items={[
          {
            user: {
              fullName: "Вася Пупкин",
              avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
            },
            text: "Это тестовый комментарий 555555",
          },
          {
            user: {
              fullName: "Иван Иванов",
              avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
            },
            text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
          },
        ]}
        isLoading={false}
      >
        <Index />
      </CommentsBlock>
    </>
  );
};
