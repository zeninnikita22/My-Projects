import { Link, animateScroll as scroll } from "react-scroll";
import { useState, useEffect } from "react";

function Links({ arr, listopen }) {
  // const [mounted, setMounted] = useState(true);

  // useEffect(() => {
  //   setMounted(!mounted);
  // }, [toggle]);

  return (
    <div className={listopen ? "generals-links active" : "generals-links"}>
      {arr.map((item) => {
        return (
          <Link
            className="link"
            href="blah"
            key={item.fullname}
            to={item.id}
            smooth={true}
            duration={1000}
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
