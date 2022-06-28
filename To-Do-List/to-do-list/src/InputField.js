import React, { useState } from "react";

function InputField({ toDoArray, setToDoArray }) {
  const [todoInputState, setTodoInputState] = useState("");
  const [dateInputState, setDateInputState] = useState("");

  function handleTodoChange(e) {
    setTodoInputState(e.target.value);
  }

  function handleDateChange(e) {
    setDateInputState(e.target.value);

    // const date = new Date();

    // date.setDate(date.getDate() + 1);

    // if (e.target.value === new Date().toISOString().slice(0, 10)) {
    //   console.log("Today");
    // } else if (e.target.value === date.toISOString().slice(0, 10)) {
    //   console.log("Tomorrow");
    // } else if (e.target.value > new Date().toISOString().slice(0, 10)) {
    //   console.log("Bigger");
    // } else {
    //   console.log("Lower");
    // }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodoInputState("");
    // randomizing ID will require changes
    const newToDoItem = {
      title: todoInputState,
      id: Math.floor(Math.random() * 1000000),
      completed: false,
      date: dateInputState,
    };
    // what to do with that?
    setToDoArray([newToDoItem, ...toDoArray]);
  }

  return (
    <form className="input-field" onSubmit={handleSubmit}>
      <input
        type="text"
        id="todo-input"
        placeholder="Type in your todo..."
        value={todoInputState}
        onChange={handleTodoChange}
      ></input>
      <input
        type="date"
        id="date-input"
        value={dateInputState}
        onChange={handleDateChange}
      ></input>
      <button type="submit">Add task</button>
    </form>
  );
}

export default InputField;
