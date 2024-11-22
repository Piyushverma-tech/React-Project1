export const getAvailableTimes = (date) => {
    const bookedSlots = {
      "2024-11-22": ["2:00 PM", "5:00 PM"], // Example of already booked slots
    };
  
    const allSlots = [
      "12:00 PM",
      "1:00 PM",
      "2:00 PM",
      "3:00 PM",
      "4:00 PM",
      "5:00 PM",
      "6:00 PM",
      "7:00 PM",
    ];
  
    // Filter slots to exclude booked ones
    return allSlots.filter((slot) => !(bookedSlots[date] || []).includes(slot));
  };