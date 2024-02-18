import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";
import { Router, Routes, Route } from "react-router-dom";
import { Layout, Home, DashBoard, NoMatch } from "./pages";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/dashboard/*" element={<DashBoard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
