import React, { useState, useEffect } from 'react';

const Search = () => {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({
    pricePerNight: '',
    destination: '',
    rating: ''
  });

  useEffect(() => {
    fetch('http://localhost:4000/Hotels')
      .then(response => response.json())
      .then(data => {
        setHotels(data);
        setFilteredHotels(data);
      })
      .catch(error => {
        console.error('Error fetching hotels data:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({
      ...searchCriteria,
      [name]: value
    });
  };

  const handleSearch = () => {
    let filtered = hotels.filter(hotel => {
      return (
        (searchCriteria.pricePerNight === '' || hotel.pricePerNight <= parseInt(searchCriteria.pricePerNight)) &&
        (searchCriteria.destination === '' || hotel.destination.toLowerCase().includes(searchCriteria.destination.toLowerCase())) &&
        (searchCriteria.rating === '' || hotel.rating >= parseInt(searchCriteria.rating))
      );
    });
    setFilteredHotels(filtered);
  };

  return (
    <div>
      <h2>Search Hotels</h2>
      <div>
        <input type="number" name="pricePerNight" placeholder="Max Price per Night" value={searchCriteria.pricePerNight} onChange={handleInputChange} />
        <input type="text" name="destination" placeholder="Destination" value={searchCriteria.destination} onChange={handleInputChange} />
        <input type="number" name="rating" placeholder="Min Rating" value={searchCriteria.rating} onChange={handleInputChange} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <h3>Results:</h3>
        <ul>
          {filteredHotels.map((hotel, index) => (
            <li key={index}>
              <strong>{hotel.name}</strong> - {hotel.destination}, ${hotel.pricePerNight}/night, Rating: {hotel.rating}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
