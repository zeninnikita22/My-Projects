import "./App.css";
import Tickets from "./Tickets";
import { React, useState } from "react";
import TravelImage from "./images/travel.jpg";
import LogoImage from "./images/logo.png";

function App() {
  const [toggleTickets, setToggleTickets] = useState(false);

  return (
    <div className="app">
      <div className="wrapper">
        <nav className="navbar">
          <img src={LogoImage} alt="logo" className="logo"></img>
          <h2>Last Minute Tickets</h2>
        </nav>
        <div className="starter-box">
          <div className="starter-text-box">
            <h1>Start your spontaneous trip now.</h1>
            <p>
              This website is to organize your spontaneous trip. No more long
              planning and overthinking. Get a rest from routine, change
              scenery, open the world with one click below.
            </p>
            <div className="button-box">
              <button
                onClick={() => setToggleTickets(!toggleTickets)}
                className="toggle-button"
              >
                Start now
              </button>
            </div>
          </div>
          <div className="starter-image-box">
            <img src={TravelImage} alt="travel" className="travel-image" />
          </div>
        </div>
        <Tickets toggleTickets={toggleTickets} />
      </div>
    </div>
  );
}

export default App;
