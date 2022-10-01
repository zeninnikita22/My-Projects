import "./App.css";
import Generals from "./Generals";
import { useState } from "react";
import Intro from "./Intro";
import SmoothCollapse from "react-smooth-collapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="app-box">
          <div className="title-box">
            <h1>RUSSIAN GENERALS KILLED IN UKRAINE</h1>
            {toggle ? (
              <button className="toggle" onClick={() => setToggle(!toggle)}>
                <FontAwesomeIcon icon={faChevronUp} color="white" />
              </button>
            ) : null}
          </div>

          <SmoothCollapse expanded={!toggle}>
            <Intro toggle={toggle} setToggle={setToggle} />
          </SmoothCollapse>
          <SmoothCollapse expanded={toggle}>
            <Generals />
          </SmoothCollapse>
        </div>
      </div>
    </div>
  );
}

export default App;
