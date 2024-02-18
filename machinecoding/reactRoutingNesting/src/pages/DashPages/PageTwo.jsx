import React from "react";
import { Routes, Link, Route } from "react-router-dom";

const ThirdNesting = () => {
  return <div>thirdNesting</div>;
};

const PageTwo = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/dashboard/pagetwo">Dashboard Main</Link>
        </li>
        <li>
          <Link to="/dashboard/pagetwo/thirdnesting">thirdnesting</Link>
        </li>
      </ul>
      <Routes>
        <Route path="thirdnesting" element={<ThirdNesting />}></Route>
      </Routes>
    </div>
  );
};

export default PageTwo;
