import { Link, animateScroll as scroll } from "react-scroll";

function Links({ arr }) {
  console.log(arr);

  return (
    <div className="generals-links">
      {arr.map((item) => {
        return (
          <Link
            href="blah"
            key={item.name}
            to={item.id}
            smooth={true}
            duration={700}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}

export default Links;
