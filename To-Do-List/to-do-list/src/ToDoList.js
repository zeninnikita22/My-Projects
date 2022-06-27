import React, { useState } from "react";

function ToDoList() {
  const [inputState, setInputState] = useState("");
  const [toDoArray, setToDoArray] = useState([]);

  function handleChange(e) {
    setInputState(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setInputState("");
    // randomizing ID will require changes
    const newToDoItem = {
      title: inputState,
      id: Math.floor(Math.random() * 1000000),
      completed: false,
    };
    setToDoArray([newToDoItem, ...toDoArray]);
  }

  function changeCompleted(clickedId) {
    toDoArray.map((item) => {
      if (item.id === clickedId) {
        item.completed = !item.completed;
      }
      return toDoArray;
    });
    const updatedToDoArray = toDoArray;
    setToDoArray([...updatedToDoArray]);
  }

  function deleteCompleted() {
    const updatedToDoArray = toDoArray.filter((item) => {
      return !item.completed;
    });
    setToDoArray([...updatedToDoArray]);
  }

  return (
    <div className="body-field">
      <form className="input-field" onSubmit={handleSubmit}>
        <input
          type="text"
          id="todo-input"
          placeholder="Type in your todo..."
          value={inputState}
          onChange={handleChange}
        ></input>
        <button type="submit">Add task</button>
      </form>
      <div className="todo-list">
        {toDoArray.map((item) => (
          <div
            className={
              item.completed ? "todo-list-item completed" : "todo-list-item"
            }
            key={item.id}
            onClick={() => changeCompleted(item.id)}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className="delete-field">
        <button onClick={deleteCompleted}>Delete completed tasks</button>
      </div>
    </div>
  );
}

export default ToDoList;
