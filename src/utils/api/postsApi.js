// API requests that are associated with the posts

// imports
import axios from "../../axios";

// Getting posts
export const getPosts = async () => {
  const { data } = await axios.get("/posts");
  return data;
};

// Getting tags
export const getTags = async () => {
  const { data } = await axios.get("/tags");
  return data;
};

// Deleting posts
export const removePosts = async (_id) => {
  const { data } = await axios.delete(`/posts/${_id}`);
  return data;
};

// Add new post
export const addNewPost = async (newPost) => {
  const response = await axios.post("/add-post", newPost);

  return response.data;
};

// Update post
export const updatePost = async (id, updatedPost) => {
  const { data } = await axios.patch(`/posts/${id}`, updatedPost);

  return data;
};

// Get one post
export const getOnePost = async (id) => {
  const { data } = await axios.get(`/posts/${id}`);

  return data;
};
