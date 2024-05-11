import { useState, useEffect } from 'react';

const Search = () => {
  const [hotels, setHotels] = useState([]);
  const [ setFilteredHotels] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({
    pricePerNight: '',
    destination: '',
    rating: '',
    hotelName: '' // Add hotelName to search criteria
  });

  useEffect(() => {
    fetch('https://hotels-gicm.onrender.com/todo')
      .then(response => response.json())
      .then((hotels) => {
        setHotels(hotels);
        setFilteredHotels(hotels);
      })
      .catch(error => {
        console.error('Error :', error);
      });
  }, );

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
        (searchCriteria.rating === '' || hotel.rating >= parseInt(searchCriteria.rating)) &&
        (searchCriteria.hotelName === '' || hotel.name.toLowerCase().includes(searchCriteria.hotelName.toLowerCase())) // Filter by hotel name
      );
    });
    setFilteredHotels(filtered);
  };

  return (
    <div>
      <h2>Search Hotels</h2>
      <div>
        <input type="text" name="hotelName" placeholder="Hotel Name" value={searchCriteria.hotelName} onChange={handleInputChange} /> {/* Add input for hotel name */}
        <input type="text" name="destination" placeholder="Destination" value={searchCriteria.destination} onChange={handleInputChange} />
        <input type="number" name="rating" placeholder="Min Rating" value={searchCriteria.rating} onChange={handleInputChange} />
        <button onClick={handleSearch}>Search</button>
        <button onClick={() => setSearchCriteria({ pricePerNight: '', destination: '', rating: '', hotelName: '' })}>Reset</button>

      </div>
      <div>
        <h3>Results:</h3>

      </div>
    </div>
  );
};

export default Search;