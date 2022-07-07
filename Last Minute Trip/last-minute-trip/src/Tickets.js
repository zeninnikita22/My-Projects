import { useEffect, useState } from "react";
import React from "react";

function Tickets({ toggleTickets }) {
  //   const [url, setUrl] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [origin, setOrigin] = useState("");
  //   const [airports, setAirports] = useState([]);

  //   const url = `https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=LON&page=None&currency=${currency}&destination=-`;

  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-Access-Token": "691bcb96d1b4bcce9ba48e48aab4c926",
  //       "X-RapidAPI-Key": "3e4e207afdmsh07cff4b4253a318p1950edjsnb2103f96cec8",
  //       "X-RapidAPI-Host":
  //         "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
  //     },
  //   };

  const handleChange = (e) => {
    e.preventDefault();
    setOrigin(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrency(e.target.elements.currency.value);
  };

  useEffect(() => {
    fetch(
      `https://autocomplete.travelpayouts.com/places2?locale=en&types[]=city&term=${origin}`
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
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

  //   useEffect(() => {
  //     fetch(url, options)
  //       .then((response) => response.json())
  //       .then((response) => console.log(response))
  //       .catch((err) => console.error(err));
  //   });

  return (
    <div className={toggleTickets ? "tickets-box toggled" : "tickets-box"}>
      <p>Last Minute Tickets</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="origin">Departure city</label>
        <input name="origin" type="text" id="origin" onChange={handleChange} />
        <label htmlFor="currency">Select currency</label>
        <select name="currency" id="currency">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="UAH">UAH</option>
        </select>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Tickets;
