import React from "react";
import { Link, Outlet, useLocation, Route, Routes } from "react-router-dom";
import { PageOne, PageTwo } from "./DashPages";

const DummyGraphs = () => {
  return <div>Graphs and tables</div>;
};



const Dashboard = () => {
  const location = useLocation();

  return (
    <div className="relative w-[100%] bg-slate-700">
      <div className="container flex">
        <div className="Sidebar w-[30%] border-2 border-gray-100 h-full">
          <ul>
            <li>
              <Link to="/dashboard">Dashboard Main</Link>
            </li>
            <li>
              <Link to="/dashboard/pageone">PageOne</Link>
            </li>
            <li>
              <Link to="/dashboard/pagetwo">PageTwo</Link>
            </li>
          </ul>
        </div>
        <div className="w-[70%]">
          <Routes>
            <Route path="/" element={<DummyGraphs />} />
            <Route path="pageone" element={<PageOne />} />
            <Route path="/pagetwo/*" element={<PageTwo />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
