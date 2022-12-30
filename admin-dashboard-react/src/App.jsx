import { useState } from "react"
import React from 'react'
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Colors from "./components/Colors"
import Datalist from "./components/Datalist"

const App = () => {
    return(
      <div>
        <Navbar/>
        <Sidebar/>
        <Colors/>
        <Datalist/>
      </div>
  ) 
}

export default App
