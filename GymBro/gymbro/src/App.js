import "./App.css";
// import Login from "./Login";
// import Register from "./Register";
import { useState } from "react";
import Form from "./Form";
import Advice from "./Advice";
import Loading from "./Loading";

function App() {
  // const [switchToRegister, setSwitchToRegister] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    gender: "",
    bodytype: "",
    aim: "",
    experience: "",
    sleep: "",
    water: "",
  });
  const [exersiseList, setExersiseList] = useState([]);
  // const [isSubmitted, setIsSubmitted] = useState("false");
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
      {isSubmitted ? (
        <Loading />
      ) : (
        <Form
          formData={formData}
          setFormData={setFormData}
          exersiseList={exersiseList}
          setExersiseList={setExersiseList}
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
        />
      )}
      {/* <Advice
        formData={formData}
        setFormData={setFormData}
        exersiseList={exersiseList}
        setExersiseList={setExersiseList}
      /> */}
    </div>
  );
}

export default App;
