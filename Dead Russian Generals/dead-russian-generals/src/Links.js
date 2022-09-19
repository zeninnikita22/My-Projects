import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

function Links({ arr }) {
  console.log(arr);

  return (
    <div className="generals-links">
      {arr.map((item) => {
        return (
          <a
            href="blah"
            key={item.name}
            // onClick={() => {
            //   scrollToSection(section8);
            // }}
          >
            {item.name}
          </a>
        );
      })}
    </div>
  );
}

export default Links;
