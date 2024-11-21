import React from "react";
import "./About.css"; // Create this CSS file for styling
import Founder1 from "../assets/founder1.jpg"; // Replace with your image paths
import Founder2 from "../assets/founder2.jpg"; // Replace with your image paths

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
        At Little Lemon, we bring the essence of Mediterranean flavors to the heart of Chicago. Founded by Mario and Adrian, our restaurant is built on a shared passion for authentic, flavorful cuisine and a commitment to creating memorable dining experiences. Our dishes are crafted with fresh, locally sourced ingredients and inspired by family recipes passed down through generations. we promise an unforgettable experience filled with warmth, flavor, and a touch of home. Welcome to Little Lemon, where every meal tells a story.
        </p>
      </div>
      <div className="about-images">
        <img src={Founder1} alt="Founder 1" className="about-image" />
        <img src={Founder2} alt="Founder 2" className="about-image" />
      </div>
    </section>
  );
};

export default About;