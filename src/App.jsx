import './App.css';
import React from "react";

import Main from './components/main_page/Main'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
    return (
        <div>
        <header><a href="/Main">dsadasdas</a></header>
        <Router>
        <Routes>
            
              <Route path="/main" exact element={<Main />} />
              
        </Routes>
        </Router>
     </div>
        
    );
}

export default App;