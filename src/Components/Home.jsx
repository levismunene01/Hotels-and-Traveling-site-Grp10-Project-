import React, { useState, useEffect } from 'react';
import Api from './Api';

const Home = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    // Fetch hotel data when the component mounts
    async function fetchHotels() {
      const data = await Api.fetchHotels();
      setHotels(data);
    }
    fetchHotels();
  }, []);

  return (
    <div>
      <h1>Magendo Tours and Travelling</h1>
     
      <section>
        <h2>Popular Destinations</h2>
        {/* Render popular destinations here */}
      </section>

      <section>
        <h2>Featured Hotels</h2>
        <div>
          {hotels.map((hotel) => (
            <div key={hotel.id}>
              <img src={hotel.Picture} alt={hotel.Name} />
              <h3>{hotel.Name}</h3>
              <p>Destination: {hotel.Destination}</p>
              <p>Price Per night: {hotel['Price Per night']}</p>
              <p>Rating: {hotel.Rating}</p>
              <p>Amenities: {hotel.Amentities}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Travel Packages</h2>
        {/* Render travel packages here */}
      </section>

    </div>
  );
};

export default Home;
