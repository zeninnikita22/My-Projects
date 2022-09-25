import "./App.css";
import Generals from "./Generals";
import { useState, useRef, useLayoutEffect } from "react";
// import { Collapse } from "react-collapse";
import Title from "./Title";
import BeheadedGeneralsImage from "./Images/Beheaded.png";

function App() {
  const [toggle, setToggle] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);
  const refContainterHeight = useRef(null);

  useLayoutEffect(() => {
    setContainerHeight(refContainterHeight.current.clientHeight);
  }, []);

  console.log(containerHeight);

  return (
    <div className="App">
      <div className="container" ref={refContainterHeight}>
        <h1>9 Russian Generals Killed in Ukraine</h1>{" "}
        <Generals
          toggle={toggle}
          setToggle={setToggle}
          containerHeight={containerHeight}
        />
        <Title toggle={toggle} setToggle={setToggle} />
      </div>
    </div>
  );
}

export default App;
