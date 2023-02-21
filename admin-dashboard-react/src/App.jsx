import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Shop from './Pages/Shop';

const App = () => {
     return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/shop" element={<Shop/>} />
          </Routes>
        </Router>
      </div>
    ); 
}

export default App
