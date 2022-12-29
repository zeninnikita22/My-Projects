import "./App.css";
import Login from "./Login";
import Register from "./Register";
import { useState } from "react";
import Data from "./Data";
import Advice from "./Advice";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="signup" element={<Register />}></Route>
        <Route
          path="data"
          element={
            <Data
              formData={formData}
              setFormData={setFormData}
              exersiseList={exersiseList}
              setExersiseList={setExersiseList}
              isSubmitted={isSubmitted}
              setIsSubmitted={setIsSubmitted}
            />
          }
        ></Route>
        <Route
          path="advice"
          element={
            <Advice
              formData={formData}
              setFormData={setFormData}
              exersiseList={exersiseList}
              setExersiseList={setExersiseList}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
