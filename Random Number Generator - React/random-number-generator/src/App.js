import "./App.css";
import React, { useState } from "react";

function App() {
  const [randomNumber, setRandomNumber] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    let parsedMinValue = 0;
    let parsedMaxValue = 0;

    const minValue = e.target.elements.minnumber.value;
    if (minValue === "") {
      parsedMinValue = 0;
    } else {
      parsedMinValue = parseInt(minValue, 10);
    }

    const maxValue = e.target.elements.maxnumber.value;
    if (maxValue === "") {
      parsedMaxValue = 1000;
    } else {
      parsedMaxValue = parseInt(maxValue, 10) + 1;
    }

    let timer = setInterval(() => {
      setRandomNumber(
        Math.floor(Math.random() * (parsedMaxValue - parsedMinValue)) +
          parsedMinValue
      );
    }, 100);

    setTimeout(() => {
      clearInterval(timer);
    }, 500);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="range__input">
        <label htmlFor="minnumber">Min</label>
        <input type="number" id="minnumber" />
      </div>

      <div className="range__input">
        <label htmlFor="maxnumber">Max</label>
        <input type="number" id="maxnumber" />
      </div>

      <button className="button" id="button__generate" type="submit">
        Generate!
      </button>
      <div className="number">
        <div className="number__text">Your number:</div>
        <p id="number__display">{randomNumber}</p>
      </div>
    </form>
  );
}

export default App;
