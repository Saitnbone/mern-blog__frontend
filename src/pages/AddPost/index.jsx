import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SimpleMDE from "react-simplemde-editor";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/auth";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "../../axios";

import "easymde/dist/easymde.min.css";
import styles from "./AddPost.module.scss";

export const AddPost = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [tags, setTags] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const imageRef = useRef(null);

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
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);

      const fields = {
        title,
        imageUrl,
        tags: tags.split(","),
        text,
      };

      const { data } = await axios.post("/add-post", fields);

      const id = data._id;

      // Перенаправление пользователя на страницу созданного поста
      navigate(`/posts/${id}`);
    } catch (error) {
      console.log(`Error adding article: ${error}`);
      alert("Ошибка при добавлении статьи");
    } finally {
      setIsLoading(false);
    }
  };

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
            Опубликовать
          </Button>
          <Link to="/">
            <Button size="large">Отмена</Button>
          </Link>
        </div>
      </Paper>
    </form>
  );
};
