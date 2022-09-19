function GeneralsItem({ item }) {
  return (
    <div key={item.name}>
      <p>{item.name}</p>
      <p>{item.text}</p>
      <img alt={item.name} src={`./Images/${item.id}.jpeg`}></img>
    </div>
  );
}

export default GeneralsItem;
