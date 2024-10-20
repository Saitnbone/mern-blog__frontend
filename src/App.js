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
import { GlobalStyles, useTheme } from "@mui/material";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const theme = useTheme();

  const elementsId = ["menu-nav"];

  useEffect(() => {
    elementsId.forEach((id) => {
      dispatch(closeElement(id));
    });
  }, [location, dispatch]);

  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Roboto", sans-serif',
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
            backgroundColor: theme.palette.background.paper,
          },
          a: {
            textDecoration: "none",
            color: theme.palette.text.primary,
          },
          ul: {
            listStyle: "none",
          },
        }}
      />
      <AuthProvider>
        <Header menuId="menu-id" />
        <NavigationList menuId="menu-id" />
        <Container
          component="main"
          sx={{
            backgroundColor: "background.paper", // Использование темы для фона
          }}
        >
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
    </>
  );
}

export default App;
