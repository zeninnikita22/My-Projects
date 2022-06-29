import React, { useState } from "react";

function InputField({ toDoArray, setToDoArray }) {
  const [todoInputState, setTodoInputState] = useState("");
  const [dateInputState, setDateInputState] = useState("");

  function handleTodoChange(e) {
    setTodoInputState(e.target.value);
  }

  function handleDateChange(e) {
    setDateInputState(e.target.value);
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
        required
      ></input>
      <input
        type="date"
        id="date-input"
        value={dateInputState}
        onChange={handleDateChange}
        required
      ></input>
      <button type="submit">Add todo</button>
    </form>
  );
}

export default InputField;
