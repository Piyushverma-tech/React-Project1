import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TableReservation from "../Components/TableReservation";


test("renders the reservation form", () => {
  render(<TableReservation/>);

  // to Check if form elements are present
  expect(screen.getByText(/Reserve a Table/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Available Time Slots/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
});

test("selects a time slot", () => {
  render(<TableReservation />);

  // Simulate selecting a time slot
  const availableSlot = screen.getByText("2:00 PM");
  fireEvent.click(availableSlot);

  // to Check if the slot is visually selected
  expect(availableSlot).toHaveClass("selected");
});
