import React from "react";
import "./Card.css";
const Card = ({ image, title, price, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2>
          {title} <span className="price">${price}</span>
        </h2>
        <p>{description}</p>
        <button className="order-button">Order a delivery 🚴</button>
      </div>
    </div>
  );
};

export default Card;