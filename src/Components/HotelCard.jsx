import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HotelCard({ id }) {
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    fetch(`https://hotels-gicm.onrender.com/todo/${id}`)
      .then((response) => response.json())
      .then((data) => setHotel(data))
      .catch((error) => console.error("Error fetching hotel:", error));
  }, [id]);

  if (!hotel) {
    return <div>Loading...</div>;
  }

  // Function to render different card styles based on ID
  const renderCard = () => {
    if (id === 1) {
      return (
        <div className="card-style1">
          <img src={hotel.Picture} alt={hotel.Name} className="w-full h" />
          <h3>{hotel.Name}</h3>
          <p>{hotel.Destination}</p>
          <p>{hotel.PricePerNight}</p>
          <p>{hotel.Rating}</p>
          <p>{hotel.Amentities}</p>
          <button>Book Now</button>
        </div>
      );
    } else if (id === 2) {
      return (
        <div className="card-style2">
          <img src={hotel.Picture} alt={hotel.Name} className="w-full h" />
          <h3>{hotel.Name}</h3>
          <p>{hotel.Destination}</p>
          <p>{hotel.PricePerNight}</p>
          <p>{hotel.Rating}</p>
          <p>{hotel.Amentities}</p>
          <button>Book Now</button>
        </div>
      );
    } else {
      // Default card style
      return (
        <div className="default-card-style">
          <img src={hotel.Picture} alt={hotel.Name} className="w-full h" />
          <h3>{hotel.Name}</h3>
          <p>{hotel.Destination}</p>
          <p>{hotel.PricePerNight}</p>
          <p>{hotel.Rating}</p>
          <p>{hotel.Amentities}</p>
          <button>Book Now</button>
        </div>
      );
    }
  };

  return (
    <Link to={`/hotels/${hotel.id}`}>
      {renderCard()}
    </Link>
  );
}

export default HotelCard;
