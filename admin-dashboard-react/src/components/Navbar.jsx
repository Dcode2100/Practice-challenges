import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navitems = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "contact", path: "/contact" },
  { name: "login", path: "/login" },
];


const Navbar = () => {
  const [nav, setNav] = React.useState(false);

  return (
    <div className="navbar">
      <h1>Admin Dashboard</h1>
      <div className={`menu-icon ${nav ? 'open': ''}`} onClick={() => setNav((prev) => (!prev))}>
        {nav ? <CloseIcon /> : <MenuIcon />}
      </div>
      <div className='nav-dropdown'>
        {nav ? (
          <ul className='nav-dropdown-links'>
            {navitems.map((item, index) => 
              <li key={index}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            )}
            </ul>
        ): (null)}
        </div>

      <ul className='nav-links'>
        {navitems.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;