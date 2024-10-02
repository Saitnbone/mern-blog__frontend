// imports
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import {
  removePosts,
  addNewPost,
  updatePost,
  getOnePost,
} from "../api/postsApi";
import axios from "../../axios";

// Hook for getting posts
export const useGetPosts = () => {
  return useQuery("posts", async () => {
    const { data } = await axios.get("/posts");

    return data;
  });
};

// Hook for getting tags
export const useGetTags = () => {
  return useQuery("tags", async () => {
    const { data } = await axios.get("/tags");

    return data;
  });
};

// Hook for deleting post
export const useDeletePosts = () => {
  const queryClient = useQueryClient();
  return useMutation(
    removePosts,
    // async (id) => {
    //   await axios.delete(`/posts/${id}`);
    // },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
      },
      onError: (error) => {
        console.error("Error deleting post:", error);
      },
    }
  );
};

// Hook for add new post
export const useAddNewPost = () => {
  const queryClient = useQueryClient();

  return useMutation(addNewPost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts"); // Инвалидируем кэш, чтобы обновить список постов
    },
    onError: (error) => {
      console.error("Error adding post:", error);
    },
  });
};

// Hook for updating post
export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation(updatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });
};

// Hook to get one full post
export const useFullPost = (id) => {
  return useQuery(["fullPost", id], getOnePost, {
    enabled: !!id, // The request is executed only if there is an id
  });
};
