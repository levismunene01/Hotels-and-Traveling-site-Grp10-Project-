import React, { useState } from 'react';
import Footer from './Footer';

const Booking = () => {
  // Define state for booking details
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numOfGuests, setNumOfGuests] = useState(1);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send booking details to server or handle as needed
    const bookingDetails = {
      name,
      email,
      checkInDate,
      checkOutDate,
      numOfGuests,
    };
    console.log('Booking Details:', bookingDetails);
    // You can further process the booking details here
  };

  return (
    <div>
      <h2>Book Your Hotel</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Check-In Date:
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            required
          />
        </label>
        <label>
          Check-Out Date:
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            required
          />
        </label>
        <label>
          Number of Guests:
          <input
            type="number"
            value={numOfGuests}
            onChange={(e) => setNumOfGuests(parseInt(e.target.value))}
            min="1"
            required
          />
        </label>
        <button type="submit">Book Now</button>
      </form>
      <Footer/>

    </div>
  

  );
};

export default Booking;
