function Links({ arr }) {
  console.log(arr);
  return (
    <div className="generals-links">
      {arr.map((item) => {
        return (
          <a href="blah" key={item.name}>
            {item.name}
          </a>
        );
      })}
    </div>
  );
}

export default Links;
