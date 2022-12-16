import "./App.css";
// import Login from "./Login";
// import Register from "./Register";
import { useState } from "react";
import Form from "./Form";

function App() {
  // const [switchToRegister, setSwitchToRegister] = useState(false);

  return (
    <div className="App">
      {/* {switchToRegister ? (
        <Register
          switchToRegister={switchToRegister}
          setSwitchToRegister={setSwitchToRegister}
        />
      ) : (
        <Login
          switchToRegister={switchToRegister}
          setSwitchToRegister={setSwitchToRegister}
        />
      )} */}
      <Form />
    </div>
  );
}

export default App;
