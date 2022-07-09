import { useEffect, useState } from "react";
import React from "react";

function Tickets({ toggleTickets }) {
  //   const [url, setUrl] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [origin, setOrigin] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [code, setCode] = useState("");
  const [suggestionsClass, setSuggestionsClass] = useState(false);
  const [flights, setFlights] = useState([]);
  const [info, setInfo] = useState({});
  //   const [airports, setAirports] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setOrigin(e.target.value);
    console.log(origin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrency(e.target.elements.currency.value);
  };

  const handleClick = (e, code, name) => {
    setCode(code);
    console.log(e);
    console.log(code, name);
    setSuggestionsClass(true);
  };

  const responseData = [];

  useEffect(() => {
    fetch(
      `https://autocomplete.travelpayouts.com/places2?locale=en&types[]=city&term=${origin}`
    )
      .then((response) => response.json())
      .then((response) => setSuggestions(response))
      //   .then(console.log(suggestions))
      .catch((err) => console.error(err));
  }, [origin]);

  //   useEffect(() => {
  //     fetch(
  //       `https://airlabs.co/api/v9/suggest?q=${origin}&api_key=b8df7667-18bb-44a3-a65b-94909f83753b`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setAirports([...data])
  //         airports.map((item) => {
  //             return fetch( `https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=${data.response.airports_by_cities[0].iata_code}&page=None&currency=${currency}&destination=-`,
  //           options)
  //         })
  // fetch(
  //   `https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=${data.response.airports_by_cities[0].iata_code}&page=None&currency=${currency}&destination=-`,
  //   options
  // )
  //           .then((response) => response.json())
  //           .then((response) => console.log(response))
  //           .catch((err) => console.error(err));
  //       })
  //       .catch((err) => console.error(err));
  //   }, [origin, currency, options]);

  useEffect(() => {
    const url = `https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=${code}&page=None&currency=${currency}&destination=-`;

    const options = {
      method: "GET",
      headers: {
        "X-Access-Token": "691bcb96d1b4bcce9ba48e48aab4c926",
        "X-RapidAPI-Key": "3e4e207afdmsh07cff4b4253a318p1950edjsnb2103f96cec8",
        "X-RapidAPI-Host":
          "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data);
        const array = Object.entries(response.data);
        setFlights(array);
      })
      .then(console.log(flights))
      .catch((err) => console.error(err));
  }, [code, currency]);

  //   function iterateObj({ item }) {
  //     if (item[1].key === 0) {
  //       return item[1][0].price;
  //     } else {
  //       return item[1][1].price;
  //     }
  //   }

  return (
    <div className={toggleTickets ? "tickets-box toggled" : "tickets-box"}>
      <p>Last Minute Tickets</p>
      <form onSubmit={handleSubmit} className="tickets-form">
        <label htmlFor="currency">Select currency</label>
        <select name="currency" id="currency">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="UAH">UAH</option>
        </select>
        <label htmlFor="origin">Departure city</label>
        <input name="origin" type="text" id="origin" onChange={handleChange} />
        {suggestions.map((item) => {
          return (
            <div
              className={
                suggestionsClass ? "suggestion not-active" : "suggestion"
              }
              key={item.code}
              onClick={(e) => handleClick(e, item.code, item.name)}
            >
              <p>
                {item.name}, {item.country_name}
              </p>
              <p>{item.code}</p>
            </div>
          );
        })}
        <button type="submit">Search</button>
      </form>
      {flights.map((item, index) => {
        return (
          <div className="flight" key={index}>
            <p>{item[0]}</p>
            {/* <p>{iterateObj(item)}</p> */}
            {/* <p>{item[0][1].price}</p> */}
            {/* <p>{item[1][0].airline}</p> */}
          </div>
        );
      })}
    </div>
  );
}

export default Tickets;
