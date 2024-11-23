import React from 'react'
import './Footer.css'
// import logo from '../assets/Logo.png'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      {/* Left Side: Logo */}

      {/* <div className="footer-logo">
        <Link
       to="/"><img src={logo} alt="Little Lemon Logo" className="footer-logo-img" />
      </Link>
         </div> */}

      {/* Right Side: Footer Links */}
      <div className="footer-links">
        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Menu</Link></li>
            <li><Link to="/reservation">Reservation</Link></li>
            <li><Link to="/">Order Online</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:info@littlelemon.com">info@littlelemon.com</a></li>
            <li><a href="tel:+123456789">+1 (234) 567-89</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>&copy; 2024 Piyush Verma. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
