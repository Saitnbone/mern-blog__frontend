import Container from "@mui/material/Container";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home, FullPost, Registration, AddPost, Login } from "./pages";
import { Footer } from "./components/Footer";
import { useCheckAuth } from "./services/hooks/useUser";
import React from "react";

// @TODO: Исправить авторизацию пользователя под React-query
function App() {
  const { data, isLoading, isError } = useCheckAuth();

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (isError) {
    return <div>Ошибка при проверке авторизации</div>;
  }

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/posts/:id/edit" element={<AddPost />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/registration" element={<Registration />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
