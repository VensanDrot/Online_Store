import React from "react";
import Nav from "./components/nav/Nav"
import Main from './components/main_page/Main'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
    return (
     <>
       
        <Router>
            <Nav />
        <Routes>
            <Route path="/" exact element="/" />
              <Route path="/main" exact element={<Main />} />
              
        </Routes>
        </Router>
  </>
        
    );
}

export default App;