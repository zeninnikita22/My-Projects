import "./App.css";
import Generals from "./Generals";
import { useState } from "react";
// import SmoothCollapse from "react-smooth-collapse";
import { Collapse } from "react-collapse";
import Title from "./Title";

function App() {
  const [toggle, setToggle] = useState(false);
  // const [titleBoxToggle, setTitleBoxToggle] = useState(true);

  return (
    <div className="App">
      <div className="container">
        <h1>9 Russian Generals Killed in Ukraine</h1>
        {/* <Collapse isOpened={true || false}> */}
        {/* {titleBoxToggle ? (
          <Title
            generalsBoxToggle={generalsBoxToggle}
            setGeneralsBoxToggle={setGeneralsBoxToggle}
          />
        ) : null} */}
        {/* </Collapse> */}
        <Collapse isOpened={true || false}>
          {toggle ? (
            <Generals toggle={toggle} setToggle={setToggle} />
          ) : (
            <Title toggle={toggle} setToggle={setToggle} />
          )}
        </Collapse>
      </div>
    </div>
  );
}

export default App;
