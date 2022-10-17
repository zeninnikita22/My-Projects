import "./App.css";
import Tickets from "./Tickets";
import { React, useState, useEffect } from "react";
import TravelImage from "./images/travel.jpg";

function App() {
  const [toggleTickets, setToggleTickets] = useState(false);
  const [starterstate, setStarterstate] = useState(false);

  useEffect(() => {
    setStarterstate(true);
  }, []);

  return (
    <div className="app">
      <div className="wrapper">
        <div className="starter-box">
          <nav className="navbar">
            <img src="" alt="logo"></img>
          </nav>
          <h1>Last Minute Trip</h1>
          <p>
            This website is to organize your spontaneous trip. No more long
            planning and overthinking. Get a rest from routine, change scenery,
            open the world with one click below.
          </p>
          <button
            onClick={() => setToggleTickets(!toggleTickets)}
            className="toggle-button"
          >
            Get Started!
          </button>
          <img src={TravelImage} alt="travel" className="travel-image" />
        </div>
        <Tickets toggleTickets={toggleTickets} />
      </div>
    </div>
  );
}

export default App;
