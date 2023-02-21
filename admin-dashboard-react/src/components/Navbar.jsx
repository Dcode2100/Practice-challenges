import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";
const navitems = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
];


const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Admin Dashboard</h1>
      <ul>
        {navitems.map((item, index) => (
          <li  key={index}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;