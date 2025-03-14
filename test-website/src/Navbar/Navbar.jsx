import React, { useState } from "react";
import "./Navbar.css";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
      </div>
      <ul className={isOpen ? "nav-menu open" : "nav-menu"}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <div className="close-menu" onClick={() => setIsOpen(false)}>
          ✖
        </div>
      </ul>
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;