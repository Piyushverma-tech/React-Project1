import React from 'react';
import './HeroSection.css';
import FoodImage from '../assets/restauranfood.jpg';
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Little Lemon</h1>
        <h2 className="hero-subtitle">Chicago</h2>
        <p className="hero-description">
          We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <Link to="/reservation">
        <button className="hero-button">Reserve a Table</button>
        </Link>
      </div>
      <div className="hero-image">
        <img src={FoodImage} alt="Delicious Mediterranean Food" />
      </div>
    </section>
  );
}

export default HeroSection;
