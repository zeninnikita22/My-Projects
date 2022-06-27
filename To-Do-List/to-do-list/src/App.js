import React from "react";
import "./App.css";
import Header from "./Header";
import ToDoList from "./ToDoList";

function App() {
  return (
    <div className="App">
      <div className="box">
        <Header />
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
