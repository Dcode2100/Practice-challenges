import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    {
      id: 1,
      title: "Home",
      links: [
        { id: 1, title: "Main", link: "/" },
        { id: 2, title: "About", link: "/about" },
        { id: 3, title: "Contact", link: "/contact" },
      ],
    },
    {
      id: 2,
      title: "Products",
      links: [
        { id: 1, title: "All Products", link: "/products" },
        { id: 2, title: "New Products", link: "/products/new" },
        { id: 3, title: "Sale", link: "/products/sale" },
      ],
    },
    {
      id: 3,
      title: "Services",
      links: [
        { id: 1, title: "Service 1", link: "/services/1" },
        { id: 2, title: "Service 2", link: "/services/2" },
        { id: 3, title: "Service 3", link: "/services/3" },
      ],
    },
  ];

  const handleHover = (itemId) => {
    setHoveredItem(itemId);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        {navItems.map((item) => (
          <div
            key={item.id}
            className={`nav-item ${hoveredItem === item.id ? "hovered" : ""}`}
            onMouseEnter={() => handleHover(item.id)}
            onMouseLeave={() => handleHover(null)}
          >
            {item.title}
          </div>
        ))}
      </nav>
      <div className={`hover-block ${hoveredItem ? "show" : ""}`}>
        {hoveredItem && (
          <>
            <div className="hover-block-left">
              {navItems
                .find((item) => item.id === hoveredItem)
                .links.map((link) => (
                  <div key={link.id} className="hover-block-link">
                    <a href={link.link}>{link.title}</a>
                  </div>
                ))}
            </div>
            <div className="hover-block-right">
              <img
                src={`/${hoveredItem}.jpg`}
                alt={`${
                  navItems.find((item) => item.id === hoveredItem).title
                } image`}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
