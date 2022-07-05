function Tickets({ toggleTickets }) {
  return (
    <div className={toggleTickets ? "tickets-box toggled" : "tickets-box"}>
      <form>
        <input type="text" />
      </form>
    </div>
  );
}

export default Tickets;
