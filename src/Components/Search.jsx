import { useState, useEffect } from 'react';
import '../App.css';

function Search() {
  const [destination, setDestination] = useState('');
  const [allHotels, setAllHotels] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchHotelData();
  }, []);

  const fetchHotelData = async () => {
    try {
      const response = await fetch('https://hotels-gicm.onrender.com/todo');
      if (!response.ok) {
        throw new Error('Failed to fetch hotel data');
      }
      const data = await response.json();
      setAllHotels(data.hotels);
      setSearchResults(data.hotels);
    } catch (error) {
      console.error('Error fetching hotel data:', error);
    }
  };

  const handleSearch = () => {
    const formattedDestination = destination.charAt(0).toUpperCase() + destination.slice(1);
    const filteredHotels = allHotels.filter(
      hotel => hotel.destination === formattedDestination
    );
    setSearchResults(filteredHotels);
  };

  return (
    <div>
      <input
        type="text"
        value={destination}
        onChange={e => setDestination(e.target.value)}
        placeholder="Enter destination"
      />
      <button onClick={handleSearch} className="search-button">Search</button>

      <div>
        {searchResults && searchResults.length > 0 && (
          searchResults.map((hotel, index) => (
            <div key={index} className="hotel-card">
              <h2>{hotel.Name}</h2>
              <p>Destination: {hotel.Destination}</p>
              <img src={hotel.Picture} alt={hotel.Name} />
              <p>Price Per Night: ${hotel.PricePernight}</p>
              <p>Rating: {hotel.Rating}</p>
              <p>Amenities: {hotel.Amenities.join(', ')}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Search;
