import React from 'react';

const Filter = ({ onFilterChange }) => {
  // Define state for filter criteria
  const [priceRange, setPriceRange] = React.useState('');
  const [starRating, setStarRating] = React.useState('');
  const [amenities, setAmenities] = React.useState([]);

  // Handle filter changes and pass them to parent component
  const handleFilterChange = () => {
    const filters = {
      priceRange,
      starRating,
      amenities,
    };
    // Pass filters to parent component
    onFilterChange(filters);
  };

  return (
    <div>
      <h2>Filter Results</h2>
      {/* Price Range */}
      <label>
        Price Range:
        <input
          type="text"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        />
      </label>

      {/* Star Rating */}
      <label>
        Star Rating:
        <select value={starRating} onChange={(e) => setStarRating(e.target.value)}>
          <option value="">Any</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
      </label>

      {/* Amenities */}
      <label>
        Amenities:
        <input
          type="checkbox"
          value="wifi"
          onChange={(e) => setAmenities([...amenities, e.target.value])}
        />
        <span>WiFi</span>
      </label>

      {/* Apply Filter button */}
      <button onClick={handleFilterChange}>Apply Filter</button>

    </div>
  );
};

export default Filter;