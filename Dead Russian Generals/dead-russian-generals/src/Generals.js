import Links from "./Links";
import GeneralsInfo from "./GeneralsInfo";
import ScrollToTopButton from "./ScrollToTopButton";

function Generals({ arr }) {
  // const scrollToSection = (elementRef) => {
  //   window.scrollTo({
  //     top: elementRef.current.offsetTop,
  //     behavior: "smooth",
  //   });
  // };

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <div className="generals-wrapper">
      <div className="generals-box">
        <GeneralsInfo arr={arr} />;
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export default Generals;
