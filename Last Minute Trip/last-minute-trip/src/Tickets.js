import { useEffect, useState } from "react";
import React from "react";
import airlines from "./data/airlines.json";
import cities from "./data/cities.json";

function Tickets({ toggleTickets }) {
  const [currency, setCurrency] = useState("USD");
  const [origin, setOrigin] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [code, setCode] = useState("");
  const [suggestionsClass, setSuggestionsClass] = useState(false);
  const [flights, setFlights] = useState([]);
  const [currencyDisplay, setCurrencyDisplay] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setOrigin(e.target.value);
    // console.log(origin);
  };

  // const handleChangeSelect = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.value);
  //   setCurrency(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setCurrency(e.target.elements.currency.value);
    console.log(currency);
    setCurrencyDisplay(currency);
    if (origin) {
      const url = `https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=${code}&page=None&currency=${currency}&destination=-`;
      console.log({ url });
      const options = {
        method: "GET",
        headers: {
          "X-Access-Token": "691bcb96d1b4bcce9ba48e48aab4c926",
          "X-RapidAPI-Key":
            "3e4e207afdmsh07cff4b4253a318p1950edjsnb2103f96cec8",
          "X-RapidAPI-Host":
            "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
        },
      };
      fetch(url, options)
        .then((response) => response.json())
        .then((response) => {
          console.log({ response: response.data });
          const array = Object.entries(response.data);
          const finalArray = array
            .map((element) => {
              let newObj = Object.values(element[1]);
              newObj.forEach((e) => {
                e.airport = element[0];
              });
              return newObj;
            })
            .flat()
            .map((item) => {
              cities.map((element) => {
                if (element.code === item.airport) {
                  item = { ...item, airport: element.name };
                }
              });
              item = {
                ...item,
                flight_number: item.airline + item.flight_number,
              };
              airlines.map((element) => {
                if (element.code === item.airline) {
                  item = { ...item, airline: element.name };
                }
              });
              return item;
            })
            .sort((a, b) => {
              return a.price - b.price;
            })
            .slice(0, 19);
          setFlights(finalArray);
          console.log({ finalArray });
        })
        .catch((err) => console.error(err));
    }
  };

  // useEffect(() => {

  // }, [origin, code, currency]);

  const handleOriginChange = (code, name) => {
    setCode(code);
    console.log(code, name);
    setSuggestionsClass(true);
    setOrigin(name);
  };

  const clearFields = () => {
    setFlights([]);
    setOrigin("");
    setSuggestionsClass(!suggestionsClass);
    setSuggestions([]);
  };

  useEffect(() => {
    fetch(
      `https://autocomplete.travelpayouts.com/places2?locale=en&types[]=city&term=${origin}`
    )
      .then((response) => response.json())
      .then((response) => setSuggestions(response))
      // .then(console.log(suggestions))
      // fix a problem with first fetch here
      .catch((err) => console.error(err));
  }, [origin]);

  return (
    <div className={toggleTickets ? "tickets-box toggled" : "tickets-box"}>
      <p>Last Minute Tickets</p>
      <form onSubmit={handleSubmit} className="tickets-form">
        <label htmlFor="currency">Select currency</label>
        <select
          onChange={(e) => {
            setCurrency(e.target.value);
          }}
          name="currency"
          id="currency"
        >
          <option className="currency-option" value="USD">
            USD
          </option>
          <option className="currency-option" value="EUR">
            EUR
          </option>
          <option className="currency-option" value="UAH">
            UAH
          </option>
        </select>
        <label htmlFor="origin">Departure city</label>
        <input
          name="origin"
          type="text"
          id="origin"
          value={origin}
          onChange={handleChange}
        />
        {suggestions.map(({ code, name, country_name }) => {
          return (
            <div
              className={
                suggestionsClass ? "suggestion not-active" : "suggestion"
              }
              key={code}
              onClick={() => handleOriginChange(code, name)}
            >
              <p>
                {name}, {country_name}
              </p>
              <p>{code}</p>
            </div>
          );
        })}
        <button type="submit">Search</button>
        <button type="button" onClick={clearFields}>
          Clear
        </button>
      </form>
      {flights.map(({ price, airport, airline, flight_number }, index) => {
        return (
          <div className="flight" key={index}>
            <p>
              Price is {price} {currencyDisplay}
            </p>
            <p>Arrival city is {airport}</p>
            <p>Airline is {airline}</p>
            <p>Your flight number is {flight_number}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Tickets;
