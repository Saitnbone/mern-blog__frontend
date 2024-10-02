import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SimpleMDE from "react-simplemde-editor";
import { Link, useParams } from "react-router-dom";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "../../axios";

import "easymde/dist/easymde.min.css";
import styles from "./AddPost.module.scss";
import { useCheckAuth } from "../../services/hooks/useUser";
import { useAddNewPost, useUpdatePost } from "../../services/hooks/usePosts";

export const AddPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: isAuth } = useCheckAuth();
  const [text, setText] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [tags, setTags] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const imageRef = useRef(null);

  const isEditing = Boolean(id);

  const { mutate: addPost, isLoading: isAdding } = useAddNewPost();
  const { mutate: updatePost, isLoading: isUpdating } = useUpdatePost();

  // Функция по изменению файлов
  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("image", file);

      const { data } = await axios.post("/uploads", formData);
      setImageUrl(data.url);
    } catch (error) {
      console.log(`Error with: ${error}`);
      alert("Ошибка загрузки изображения");
    }
  };

  const onClickRemoveImage = () => {
    setImageUrl("");
  };

  const onChange = React.useCallback((value) => {
    setText(value);
  }, []);

  // Отправка статьи на бекенд
  const onSubmit = (event) => {
    event.preventDefault();

    const fields = {
      title,
      imageUrl,
      tags: tags.split(","),
      text,
    };

    const mutation = isEditing ? updatePost : addPost;

    mutation(
      { id, updatePost: fields },
      {
        onSucces: (data) => {
          const postId = isEditing ? id : data._id;
          navigate(`/posts/${postId}`);
        },
      }
    );
  };

  // Настройки для редактирования поста
  React.useEffect(() => {
    if (id) {
      axios
        .get(`/posts/${id}`)
        .then(({ data }) => {
          setTitle(data.title);
          setTags(data.tags.join(","));
          setText(data.text);
          setImageUrl(data.imageUrl);
        })
        .catch((error) => {
          console.log(error);
          alert("Ошибка при получении статьи");
        });
    }
  }, [id]);

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: "400px",
      autofocus: true,
      placeholder: "Введите текст...",
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    []
  );

  if (!localStorage.getItem("token") && !isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <form onSubmit={onSubmit}>
      <Paper style={{ padding: 30 }}>
        <Button
          onClick={() => imageRef.current.click()}
          variant="outlined"
          size="large"
        >
          Загрузить превью
        </Button>
        <input ref={imageRef} type="file" onChange={handleChangeFile} hidden />
        {imageUrl && (
          <>
            <Button
              variant="contained"
              color="error"
              onClick={onClickRemoveImage}
            >
              Удалить
            </Button>
            <img
              className={styles.image}
              src={`http://localhost:4444${imageUrl}`}
              alt="Uploaded"
            />
          </>
        )}
        <br />
        <br />
        <TextField
          classes={{ root: styles.title }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          variant="standard"
          placeholder="Заголовок статьи..."
          fullWidth
        />
        <TextField
          classes={{ root: styles.tags }}
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          variant="standard"
          placeholder="Тэги"
          fullWidth
        />
        <SimpleMDE
          className={styles.editor}
          value={text}
          onChange={onChange}
          options={options}
        />
        <div className={styles.buttons}>
          <Button type="submit" size="large" variant="contained">
            {isEditing ? "Сохранить" : "Опубликовать"}
          </Button>
          <Link to="/">
            <Button size="large">Отмена</Button>
          </Link>
        </div>
      </Paper>
    </form>
  );
};
