import React from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Footer from "./Components/Footer";
import Search from "./Components/Search";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/destination" component={Destination} />
          <Route path="/hotels" exact component={HotelList} />
          <Route path="/hotels/:hotelId" component={HotelDetail} />
          <Route path="/search" component={Search} />
          <Route path="/booking" component={Booking} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;