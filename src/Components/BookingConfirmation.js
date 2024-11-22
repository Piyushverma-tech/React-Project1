import React from "react";
import "./BookingConfirmation.css"; 
import { Link } from "react-router-dom";

const BookingConfirmation = ({ bookingDetails }) => {
  if (!bookingDetails) {
    return (
      <div className="confirmation-container">
        <h2>No Booking Found</h2>
        <p>Please make a reservation to see the details here.</p>
      </div>
    );
  }

  // Generate a unique booking ID 
  const bookingId = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;

  // Handle printing the receipt
  const handlePrint = () => {
    const receipt = document.getElementById("receipt").innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = receipt;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload(); // Restore page content
  };

  return (
    <div className="confirmation-container" id="receipt">
      <h2>Booking Confirmation</h2>
      <p>Thank you for reserving a table at Little Lemon!</p>
      <div className="booking-details">
        <p><strong>Booking ID:</strong> {bookingId}</p>
        <p><strong>Name:</strong> {bookingDetails.name}</p>
        <p><strong>Email:</strong> {bookingDetails.email}</p>
        <p><strong>Phone:</strong> {bookingDetails.phone}</p>
        <p><strong>Date:</strong> {bookingDetails.date}</p>
        <p><strong>Time:</strong> {bookingDetails.time}</p>
        <p><strong>Guests:</strong> {bookingDetails.guests}</p>
        <p><strong>Special Requests:</strong> {bookingDetails.requests || "None"}</p>
      </div>
      <p>We look forward to serving you. See you soon!</p>
      {/* Buttons */}
      <button className="print-receipt-button" onClick={handlePrint}>Print Receipt</button>
      <Link to="/">
        <button className="return-home-button">Return to Home Page</button>
      </Link>
    </div>
  );
};

export default BookingConfirmation;