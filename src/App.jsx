import React from "react";
import Nav from "./components/nav/Nav"
import Main from './components/main_page/Main'
import Footer from './components/footer/Footer'
import Register from "./components/register/Register";
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
        </Routes>
            <Footer />
        </Router>
  </>
        
    );
}

export default App;