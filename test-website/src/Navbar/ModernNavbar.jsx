import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ModernNavbar.css";
import eiffelTower from "../images/eiffel-tower.png";

function ModernNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".nav-container")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close menu when clicking a link
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header-wrapper">
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="logo">
            <Link to="/">
              <img src={eiffelTower} alt="Eiffel Tower Logo" className="logo-image" />
            </Link>
          </div>
          
          <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            <div className={`hamburger ${isOpen ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className={`nav-elements ${isOpen ? "active" : ""}`}>
            <ul>
              <li>
                <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
              </li>
              <li>
                <Link to="/projects" className="nav-link" onClick={closeMenu}>Projects</Link>
              </li>
              <li>
                <Link to="/services" className="nav-link" onClick={closeMenu}>Services</Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Spacer to prevent content from going under navbar */}
      <div className="navbar-spacer"></div>
    </header>
  );
}

export default ModernNavbar;