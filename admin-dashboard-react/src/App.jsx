import React from 'react'
import Navbar from './components/Navbar';
import Home from '../src/Pages/Home';
import Shop from "../src/Pages/Shop";

const App = () => {
     return (
      <div>
        <Navbar/>
        <Home/>
        <Shop/>
      </div>
    ); 
}

export default App
