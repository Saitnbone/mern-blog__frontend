// imports
import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useLogin } from "../../utils/hooks/useUser";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import styles from "./Login.module.scss";

// User logging component
export const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const mutation = useLogin();

  const onSubmit = async (values) => {
    try {
      const result = await mutation.mutateAsync(values);

      if (result.token) {
        localStorage.setItem("token", result.token);
      }
    } catch (error) {
      console.log("Failed to log in:", error);
      setError("auth", {
        type: "manual",
        message: "Неверный логин или пароль",
      });
    }
  };

  const isAuth = Boolean(localStorage.getItem("token"));

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Вход в аккаунт
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          label="E-Mail"
          type="email"
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          {...register("email", { required: "Укажите почту" })}
          fullWidth
        />
        <TextField
          className={styles.field}
          label="Пароль"
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          {...register("password", { required: "Укажите пароль" })}
          fullWidth
        />
        <Button type="submit" size="large" variant="contained" fullWidth>
          Войти
        </Button>
      </form>
    </Paper>
  );
};
