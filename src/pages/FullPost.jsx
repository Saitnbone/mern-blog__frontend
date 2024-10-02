import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { Post } from "../components/Post";
import { Index } from "../components/AddComment";
import { CommentsBlock } from "../components/CommentsBlock";
import { useFullPost } from "../services/hooks/usePosts";
// import axios from "../axios";
import Markdown from "react-markdown";

export const FullPost = () => {
  // const [data, setData] = React.useState();
  // const [isLoading, setIsLoading] = React.useState(true);
  const { id } = useParams();
  console.log(id);

  // @TODO: исправить под react-query
  // useEffect(() => {
  //   axios
  //     .get(`/posts/${id}`)
  //     .then((res) => {
  //       setData(res.data);
  //       setIsLoading(false);
  //       console.log(res.data);
  //       console.log(res.data.user);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       alert("Error receiving article");
  //       setIsLoading(false);
  //     });
  // }, [id]);
  const { data, isLoading, isError, error } = useFullPost(id);

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
