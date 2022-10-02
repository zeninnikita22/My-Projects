import { Element, animateScroll as scroll } from "react-scroll";

function GeneralsItem({ item }) {
  return (
    <Element key={item.fullname} name={item.id}>
      <p>{item.fullname}</p>
      <p>{item.text}</p>
      <img alt={item.fullname} src={require(`./Images/${item.id}.jpeg`)}></img>
    </Element>
  );
}

export default GeneralsItem;
