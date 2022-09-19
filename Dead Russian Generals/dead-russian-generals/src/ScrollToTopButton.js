import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function ScrollToTopButton() {
  return (
    <button className="scrolltotop">
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
}

export default ScrollToTopButton;
