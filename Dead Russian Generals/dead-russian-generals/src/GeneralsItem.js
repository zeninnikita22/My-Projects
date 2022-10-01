import { Element, animateScroll as scroll } from "react-scroll";

function GeneralsItem({ item }) {
  return (
    <Element key={item.name} name={item.id}>
      <p>{item.name}</p>
      <p>{item.text}</p>
      <img alt={item.name} src={require(`./Images/${item.id}.jpeg`)}></img>
    </Element>
  );
}

export default GeneralsItem;
