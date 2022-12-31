import { useState } from "react"
import React from 'react'
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Colors from "./components/Colors"

const App = () => {

  const[sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((prevstate) => ! prevstate)
  }
    return(
      <div>
        <div className="Main-container flex">
        <Sidebar  sidebar = {sidebar}/>
        <Navbar openSidebar={toggleSidebar}/>
        </div>
        <Colors/>
      </div>
  ) 
}

export default App
