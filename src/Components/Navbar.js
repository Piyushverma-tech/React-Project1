import React, { useState } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import logo from '../assets/Logo.png'

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const handleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src={logo} alt="Little Lemon Logo" /></Link>
      </div>

      <ul className={`navbar-links ${isMobile ? "active" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Menu</Link></li>
        <li><Link to="/reservation">Reservation</Link></li>
        <li><Link to="/">Order Online</Link></li>
        <li><Link to="/">Login</Link></li>
      </ul>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={handleMobileMenu}>
        <i className="fa fa-bars"></i>
      </div>
    </nav>
  );
}

export default Navbar;