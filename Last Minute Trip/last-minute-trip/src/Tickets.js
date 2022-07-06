import { useEffect } from "react";

function Tickets({ toggleTickets }) {
  const options = {
    method: "GET",
    headers: {
      "X-Access-Token": "691bcb96d1b4bcce9ba48e48aab4c926",
      "X-RapidAPI-Key": "3e4e207afdmsh07cff4b4253a318p1950edjsnb2103f96cec8",
      "X-RapidAPI-Host":
        "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
    },
  };

  const handleSubmit = () => {
    console.log("Submitted!");
  };

  useEffect(() => {
    fetch(
      "https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=VIE&page=None&currency=RUB&destination=-",
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  });

  return (
    <div className={toggleTickets ? "tickets-box toggled" : "tickets-box"}>
      <p>Last Minute Tickets</p>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Tickets;
