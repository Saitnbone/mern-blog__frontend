import Container from "@mui/material/Container";
import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/header";
import { Home, FullPost, Registration, AddPost, Login } from "./pages";
import { Footer } from "./components/footer";
import { AuthProvider } from "./components/auth-context";
import React from "react";
import { NavigationList } from "./components/nav-list";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeElement } from "./utils/redux/slices/dropDown-elements";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  const elementsId = ["menu-nav"];

  useEffect(() => {
    elementsId.forEach((id) => {
      dispatch(closeElement(id));
    });
  }, [location, dispatch]);

  return (
    <AuthProvider>
      <Header menuId='menu-id'/>
      <NavigationList menuId="menu-id" />
      <Container>
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
