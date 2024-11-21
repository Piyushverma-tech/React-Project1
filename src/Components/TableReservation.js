import React, { useState } from "react";
import "./TableReservation.css";

const TableReservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
    requests: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and submission logic here
    alert("Reservation submitted successfully!");
    console.log(formData);
  };

  return (
    <section className="reservation-section">
      <header className="reservation-header">
        <h1>Reserve a Table</h1>
        <p>Book your table in advance and enjoy an exceptional dining experience at Little Lemon.</p>
      </header>

      <div className="reservation-container">
        {/* Reservation Form */}
        <form className="reservation-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />

          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            value={formData.time}
            onChange={handleChange}
            required
          />

          <label htmlFor="guests">Number of Guests</label>
          <input
            type="number"
            id="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            max="20"
            placeholder="Enter number of guests"
            required
          />

          <label htmlFor="requests">Special Requests</label>
          <textarea
            id="requests"
            value={formData.requests}
            onChange={handleChange}
            placeholder="Enter any special requests"
          ></textarea>

          <button type="submit" className="reserve-button">Reserve Table</button>
        </form>

        {/* Reservation Info Section */}
        <div className="reservation-info">
          <h2>Reservation Policies</h2>
          <p>
            Please arrive on time to ensure your reservation is honored. For parties larger than 8,
            please contact us directly. We look forward to serving you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default TableReservation;