import React from "react";
import TestimonialCard from "./TestimonialCard"; // Import the card component
import "./Testimonials.css"; // Create this CSS file for styling
import person1 from "../assets/person1.png"; // Import images
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";

const testimonialsData = [
  {
    image: person1,
    name: "Sophia Johnson",
    rating: 5,
    review:
      "The service was absolutely amazing! The food was fresh, and the delivery was quick. Highly recommended!",
  },
  {
    image: person2,
    name: "Michael Brown",
    rating: 4,
    review:
      "Great experience overall! The food was delicious, but the delivery took slightly longer than expected.",
  },
  {
    image: person3,
    name: "Emily Davis",
    rating: 5,
    review:
      "A wonderful dining experience! The staff is very friendly, and the dishes are worth every penny.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h1>What Our Customers Say</h1>
      <div className="testimonial-cards">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            image={testimonial.image}
            name={testimonial.name}
            rating={testimonial.rating}
            review={testimonial.review}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;