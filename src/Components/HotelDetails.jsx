import React from 'react';

const HotelDetails = () => {
  const hotel = {
    id: 1,
    name: 'Soroi Mara Bush',
    Destination: 'The Maasai Mara',
    price: 'ksh 196,370',
    amenities: ['Complimentary WiFi', 'Photography Lounge', 'Guided Bush Walks','Spa Treatments'],
    rating:'4 Star Hotel',

    id:2,
    name:'The Social House',
    Destination:'Nairobi',
    price:'',
    amenities:['Daily housekeeping', '3 restaurant and bar/lounge','Breakfast available','Fitness centre','Coffee shop/cafe','Airport pick-up service'],
    rating:'4 Star Hotel',

    id:3,
    name:'Cardamom House',
    Destination:'Kilifi',
    price:"Ksh 76,000",
    amenities:['Swimming Pool','Spa','Restaurant','Indoor Games','Fireplace','Jungle Safari','Kids Play Area','Bar'],
    rating:'5 Star Hotel',

    id:4,
    name:'Emara Ole-Sereni',
    Destination:'Nairobi',
    price:'Ksh 20,668',
    amenities:['Heated swimming pool','Gift Shop','Duma Spa','In House Laundry','Travel Desk'],
    rating:'5 Star Hotel',

    id:5,
    name:'Naivasha Sopa Lodge',
    Destination:'Lake Naivasha',
    price:'Ksh45,694',
    amenities:['Free Wi-Fi','Outdoor Pool','Free parking'],
    rating:'3 Star Hotel',

    id:6,
    name:'The Boma Nairobi',
    Destination:'Nairobi',
    price:'Ksh 17,000',
    amenities:['Spa','Travel Desk','Gift Shop','Fitness Centre','Sauna'],
    rating:'5 Star Hotel',

    id:7,
    name:'Nomad Beach Resort',
    Destination:'Diani,Ukunda',
    price:'Ksh 4 Star Hotel',
    amenities:['Free breakfast buffet','Poolside bar','Private Beach'],
    rating:'4 Star Hotel',

    id:8,
    name:'Baobab Beach Resort & Spa',
    Destination:'Diani,Ukunda',
    price:'Ksh 34,163',
    amenities:['Poolside bar','Private Beach'],
    rating:'4 Star Hotel',

    id:9,
    name:'Southern Palms Beach Resort',
    Destination:'Diani,Ukunda',
    price:'Ksh 26,900',
    amenities:[''],
    rating:'4 Star Hotel',

    id:10,
    name:'The Maji Beach Boutique Hotel',
    Destination:'Diani,Ukunda',
    price:'Ksh 67,729',
    amenities:[''],
    rating:'5 Star Hotel',

    id:11,
    name:'Pinewood Beach Resort and Spa',
    Destination:'Diani,Ukunda',
    price:'Ksh 20,636',
    amenities:[''],
    rating:'5 Star Hotel',

    id:12,
    name:'PrideInn Mara Camp & Cottages',
    Destination:'The Maasai Mara National Reserve',
    price:'Ksh 45,694',
    amenities:[''],
    rating:'5 Star Hotel',

    id:13,
    name:'Muthu Keekorok Lodge, Maasai Mara,Narok',
    Destination:'The Maasai Mara',
    price:'Ksh 96,480',
    amenities:[''],
    rating: '4 Star Hotel',

    id:14,
    name:'Fairmont Mara Safari Club',
    Destination:'The Maasai Mara National Reserve',
    price:'Ksh 150,750',
    amenities:[''],
    rating:'5 Star Hotel',

    id:15,
    name:'Entumoto Toto Camp',
    Destination:'The Maasai Mara National Reserve',
    price:'Ksh 99,616',
    amenities:[''],
    rating:'5 Star Hotel',

  };

  return (
    <div>
      <h2>Hotel Details</h2>
      <div>
        <h3>{hotel.name}</h3>
        <p>Destination: {hotel.Destination}</p>
        <p>Price: {hotel.price}</p>
        <p>rating:{hotel.rating}</p>
        <h4>Amenities:</h4>
        <ul>
          {hotel.amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HotelDetails;