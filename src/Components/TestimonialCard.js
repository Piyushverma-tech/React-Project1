import React from "react";
import "./TestimonialCard.css"; // Create a CSS file for the card

const TestimonialCard = ({ image, name, rating, review }) => {
  // Function to display star ratings
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push("⭐");
    }
    if (halfStar) {
      stars.push("⭐️"); // For half-star, you can replace it with a custom icon or character
    }
    return stars.join(" ");
  };

  return (
    <div className="testimonial-card">
      <img src={image} alt={name} className="testimonial-image" />
      <div className="testimonial-content">
        <h3 className="testimonial-name">{name}</h3>
        <p className="testimonial-rating">{renderStars()}</p>
        <p className="testimonial-review">{review}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;