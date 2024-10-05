// import
import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { useForm } from "react-hook-form";
import { useRegistration } from "../../utils/hooks/useUser";
import { Navigate } from "react-router-dom";

import styles from "./Login.module.scss";

// User Registration Component
export const Registration = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const mutation = useRegistration();

  const onSubmit = async (values) => {
    try {
      const result = await mutation.mutateAsync(values);

      localStorage.setItem("token", result.token);
    } catch (error) {
      console.log("Failed to registration in:", error);
      setError("registration", {
        type: "manual",
        message: "Ошибка регистрации",
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
        Создание аккаунта
      </Typography>
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          label="Полное имя"
          error={Boolean(errors.fullName?.message)}
          helperText={errors.fullName?.message}
          {...register("fullName", { required: "Введите имя и фамилию" })}
          fullWidth
        />
        <TextField
          className={styles.field}
          label="E-Mail"
          type="email"
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          {...register("email", { required: "Введите ваш E-Mail" })}
          fullWidth
        />
        <TextField
          className={styles.field}
          label="Пароль"
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          {...register("password", { required: "Создайте пароль" })}
          fullWidth
        />
        <Button
          disabled={!isValid || mutation.isLoading}
          type="submit"
          size="large"
          variant="contained"
          fullWidth
        >
          {mutation.isLoading ? "Регистрация..." : "Зарегистрироваться"}
        </Button>
      </form>
    </Paper>
  );
};
