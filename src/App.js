import Container from "@mui/material/Container";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home, FullPost, Registration, AddPost, Login } from "./pages";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/posts" element={<AddPost />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/registration" element={<Registration />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
