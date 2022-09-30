import "./App.css";
import Generals from "./Generals";
import { useState } from "react";
import Title from "./Title";
import SmoothCollapse from "react-smooth-collapse";
import BeheadedGeneralsImage from "./Images/Beheaded.png";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <h1>
          9 Russian Generals Killed in Ukraine{" "}
          {toggle ? (
            <button onClick={() => setToggle(!toggle)}>\\\</button>
          ) : null}
        </h1>
        <SmoothCollapse expanded={!toggle}>
          <Title toggle={toggle} setToggle={setToggle} />
        </SmoothCollapse>
        <SmoothCollapse expanded={toggle}>
          <Generals />
        </SmoothCollapse>
        {/* {toggle ? <Generals /> : null} */}
      </div>
    </div>
  );
}

export default App;
