import React, { useState } from "react";
import { getAvailableTimes } from "../api";
import BookingConfirmation from "./BookingConfirmation";
import "./TableReservation.css";


const BookingSlot = ({ time, isBooked, isSelected, onSelect }) => {
  return (
    <button
      type="button"
      className={`booking-slot ${isBooked ? "booked" : isSelected ? "selected" : "available"}`}
      disabled={isBooked}
      onClick={() => onSelect(time)}
    >
      {time} {isBooked ? "(Booked)" : ""}
    </button>
  );
};


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
  const [availableSlots, setAvailableSlots] = useState([]);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSlotSelect = (time) => {
    setFormData({
      ...formData,
      time,
    });
  };

  const handleDateChange = (e) => {
    const date = e.target.value;
    setFormData({
      ...formData,
      date,
    });
    const times = getAvailableTimes(date);
    setAvailableSlots(times);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.time) {
      alert("Please select a time slot.");
      return;
    }
    alert("Reservation submitted successfully!");
    setBookedSlots([...bookedSlots, formData.time]);
    setShowConfirmation(true); // Show the confirmation page
  };

  return (
    <div>
      {!showConfirmation ? (
        <section className="reservation-section">
          <header className="reservation-header">
            <h1>Reserve a Table</h1>
            <p>Book your table in advance and enjoy an exceptional dining experience at Little Lemon.</p>
          </header>

          <div className="reservation-container">
            <form className="reservation-form" onSubmit={handleSubmit}>
              {/* Form Fields */}
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
                onChange={handleDateChange}
                required
              />
              <div className="available-slots">
                <label id="time-slots">Available Time Slots</label>
                <div className="booking-slots" role="group" aria-labelledby="time-slots">
                  {availableSlots.map((slot) => (
                    <BookingSlot
                      key={slot}
                      time={slot}
                      isBooked={bookedSlots.includes(slot)}
                      isSelected={formData.time === slot}
                      onSelect={handleSlotSelect}
                    />
                  ))}
                </div>
              </div>
              <label htmlFor="guests">Number of Guests</label>
              <input
                type="number"
                id="guests"
                value={formData.guests}
                onChange={handleChange}
                min="1"
                max="20"
                required
              />
              <label htmlFor="requests">Special Requests</label>
              <textarea
                id="requests"
                value={formData.requests}
                onChange={handleChange}
                placeholder="Enter any special requests"
              ></textarea>
              <button type="submit" className="reserve-button">
                Reserve Table
              </button>
            </form>
            <div className="reservation-info">
              <h2>Reservation Policies</h2>
              <p>
                Please arrive on time to ensure your reservation is honored. For parties larger than 8, please contact us directly. We look forward to serving you!
              </p>
            </div>
          </div>
        </section>
      ) : (
        <BookingConfirmation bookingDetails={formData} />
      )}
    </div>
  );
};

export default TableReservation;