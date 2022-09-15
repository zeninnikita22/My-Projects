function GeneralsItem({ item }) {
  return (
    <div key={item.name}>
      <p>{item.name}</p>
      <p>{item.text}</p>
      {/* <img></img> */}
    </div>
  );
}

export default GeneralsItem;
