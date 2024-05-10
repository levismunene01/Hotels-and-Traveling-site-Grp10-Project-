import React from 'react';

const Destination = () => {
  const destinations = [
    { id:1, name:'The Maasai Mara'},
    { id:2, name:'Nairobi', rating:'4 Star Hotel'},
    { id:3, name:'Kilifi' },
    {id:4, name:'Nairobi'},
    {id:5, name: 'Lake Naivasha'},
    {id:6, name:'Nairobi'},
    {id:7, name:'Diani,Ukunda'},
    {id:8, name:'Diani,Ukunda'},
    {id:9, name:'Diani,Ukunda'},
    {id:10, name:'Diani,Ukunda'},
    {id:11, name:'Diani,Ukunda'},
    {id:12, name:'Diani Ukunda'},
    {id:13, name:'The Maasai Mara'},
    {id:14, name:'The Maasai Mara National Reserve'},
    {id:15, name:'The Maasai Mara National Reserve'},

  ];

  return (
    <div>
      <h2>Destinations</h2>
      <ul>
        {destinations.map(destination => (
          <li key={destination.id}>
            <h3>{destination.name}</h3>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Destination;