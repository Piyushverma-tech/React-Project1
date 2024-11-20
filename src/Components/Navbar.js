import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const handleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Logo</a>
      </div>

      <ul className={`navbar-links ${isMobile ? "active" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservation">Reservation</a></li>
        <li><a href="#order-online">Order Online</a></li>
        <li><a href="#login">Login</a></li>
      </ul>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={handleMobileMenu}>
        <i className="fa fa-bars"></i>
      </div>
    </nav>
  );
}

export default Navbar;