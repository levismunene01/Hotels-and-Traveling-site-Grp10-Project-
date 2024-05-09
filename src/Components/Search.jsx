import React, { useState, useEffect } from 'react';
import Search from './Search';

const HotelSearchPage = () => {
  const [hotels, setHotels] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch('http://localhost:3000/Hotels');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setHotels(data);
        setSearchResults(data); // Initially display all hotels
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchHotels();
  }, []);

  const handleSearch = (searchData) => {
    const filteredResults = hotels.filter(hotel => {
      const locationMatch = hotel.location.toLowerCase().includes(searchData.location.toLowerCase());
      const priceInRange = (!searchData.minPrice || hotel.price >= searchData.minPrice) && (!searchData.maxPrice || hotel.price <= searchData.maxPrice);
      return locationMatch && priceInRange;
    });

    setSearchResults(filteredResults);
  };

  return (
    <div>
      <h1>Hotel Search</h1>
      <Search onSearch={handleSearch} />
      <div>
        {/* Render search results */}
        {searchResults.map((hotel, index) => (
          <div key={index}>
            <h2>{hotel.name}</h2>
            <p>Location: {hotel.location}</p>
            <p>Price: {hotel.price}</p>
            {/* Add more hotel details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelSearchPage;
