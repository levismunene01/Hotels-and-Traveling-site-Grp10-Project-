import React from 'react';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Destination from  "./Components/Destination";
import HotelList from  "./Components/HotelList";
import HotelDetails from "./Components/HotelDetails"

const App = ()=>{
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<Home/>} /> */}
        <Route path="/Destination" Component={Destination} />
        <Route path="/HotelList" Component={HotelList} />
        <Route path="/HotelDetails" Component={HotelDetails} />
      </Routes>
      </Router>
  );
};

export default App;