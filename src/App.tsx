import React from "react";
import Nav from "./components/nav/Nav.tsx";
import Main from "./components/main_page/Main.tsx";
import Footer from "./components/footer/Footer.tsx";
import Register from "./components/register/Register.tsx";
import Login from "./components/login/Login.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
