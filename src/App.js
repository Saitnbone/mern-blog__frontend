import Container from "@mui/material/Container";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home, FullPost, Registration, AddPost, Login } from "./pages";
import { Footer } from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";
import React from "react";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<FullPost />} />
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
