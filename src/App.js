import Container from "@mui/material/Container";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home, FullPost, Registration, AddPost, Login } from "./pages";
import { Footer } from "./components/Footer";
import { AuthProvider } from "./components/AuthContext";
import React from "react";

// @TODO: Исправить авторизацию пользователя под React-query
function App() {

  return (
    <AuthProvider>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/posts/:id/edit" element={<AddPost />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/registration" element={<Registration />} />
        </Routes>
      </Container>
      <Footer />
    </AuthProvider>
  );
}

export default App;
