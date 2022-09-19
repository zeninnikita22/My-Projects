import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function ScrollToTopButton() {
  return (
    <button
      className="scrolltotop"
      onClick={() =>
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      }
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
}

export default ScrollToTopButton;
