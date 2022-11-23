import "./App.css";
import Login from "./Login";
import Register from "./Register";
import { useState } from "react";

function App() {
  const [switchToRegister, setSwitchToRegister] = useState(false);
  return (
    <div className="App">
      {switchToRegister ? (
        <Register
          switchToRegister={switchToRegister}
          setSwitchToRegister={setSwitchToRegister}
        />
      ) : (
        <Login
          switchToRegister={switchToRegister}
          setSwitchToRegister={setSwitchToRegister}
        />
      )}
    </div>
  );
}

export default App;
