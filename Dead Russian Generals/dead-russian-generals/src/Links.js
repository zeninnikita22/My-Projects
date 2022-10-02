import { Link, animateScroll as scroll } from "react-scroll";
import { useState, useEffect } from "react";

function Links({ arr, toggle }) {
  // const [mounted, setMounted] = useState(true);

  // useEffect(() => {
  //   setMounted(!mounted);
  // }, [toggle]);

  return (
    <div className={toggle ? "generals-links active" : "generals-links"}>
      {arr.map((item) => {
        return (
          <Link
            className="link"
            href="blah"
            key={item.fullname}
            to={item.id}
            smooth={true}
            duration={700}
          >
            <img alt={item.fullname} src={require(`./Images/skull.png`)}></img>
            <p className="link-name">{item.surname}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default Links;
