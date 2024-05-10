import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HotelCard from "../HotelCard";

function HotelDetails() {
  const params = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const res = await fetch(`https://hotels-gicm.onrender.com/todo/${params.hotelid}`);
        const data = await res.json();
        setHotel(data); // Set the fetched hotel data
      } catch (error) {
        console.error("Error fetching hotel details:", error);
      }
    };

    fetchHotelDetails();
  }, [params.hotelid]); // Added params.hotelid as a dependency

  return (
    <div>
      {hotel && <HotelCard id={hotel.id} />} {/* Pass the hotel ID to HotelCard */}
    </div>
  );
}

export default HotelDetails;
