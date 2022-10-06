import { Element, animateScroll as scroll } from "react-scroll";

function GeneralsItem({ item }) {
  return (
    <Element className="general-item" key={item.fullname} name={item.id}>
      <div className="general-text">
        <p>Full name: {item.fullname}</p>
        <p>Military rank: {item.rank}</p>
        <p>Position: {item.position}</p>
        <p>Death info: {item.text}</p>
      </div>
      <img alt={item.fullname} src={require(`./Images/${item.id}.jpeg`)}></img>
    </Element>
  );
}

export default GeneralsItem;
