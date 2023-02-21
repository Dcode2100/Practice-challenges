import React, { useState } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navitems = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "#shop" },
  { name: "Contact", path: "#contact" },
  { name: "Login", path: "#login" },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [nav, setNav] = useState(false);

  const handleNavClick = () => {
    setNav((prev) => !prev);
  };

  return (
    <div>
      <div className="navbar">
        <h1>Admin Dashboard</h1>
        <div
          className={`menu-icon ${nav ? "open" : ""}`}
          onClick={handleNavClick}
        >
          {nav ? <CloseIcon /> : <MenuIcon />}
        </div>
        <div className="nav-dropdown">
          {nav ? (
            <ul className="nav-dropdown-links">
              {navitems.map((item, index) => (
                <li key={index} onClick={() => setActive(item.name)}>
                  <a href={item.path}>{item.name}</a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <ul className="nav-links">
          {navitems.map((item, index) => (
            <li
              key={index}
              onClick={() => setActive(item.name)}
              className={active === item.name ? "active" : ""}
            >
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
