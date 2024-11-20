import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      {/* Left Side: Logo */}
      {/* <div className="footer-logo">
        <a href="/">
          <img src={Logo} alt="Little Lemon Logo" className="footer-logo-img" />
        </a>
      </div> */}

      {/* Right Side: Footer Links */}
      <div className="footer-links">
        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservation">Reservation</a></li>
            <li><a href="#order-online">Order Online</a></li>
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
        <p>&copy; 2024 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
