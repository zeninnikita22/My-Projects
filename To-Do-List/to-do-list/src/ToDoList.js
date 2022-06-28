import React, { useState } from "react";
import InputField from "./InputField";

function ToDoList() {
  const [toDoArray, setToDoArray] = useState([]);
  const [inputShow, setInputShow] = useState(false);
  const currentDate = new Date().toISOString().slice(0, 10);

  function showInput() {
    if (inputShow === false) {
      setInputShow(true);
    } else {
      setInputShow(false);
    }
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

  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);

  // if (itemDate === new Date().toISOString().slice(0, 10)) {
  //   return "Today";
  // } else if (itemDate === tomorrowDate.toISOString().slice(0, 10)) {
  //   return "Tomorrow";
  // } else if (itemDate > new Date().toISOString().slice(0, 10)) {
  //   return itemDate;
  // } else {
  //   return "Error MSG";
  // }

  return (
    <div className="body-field">
      <button onClick={showInput}>Add new todo</button>
      {inputShow ? (
        <InputField toDoArray={toDoArray} setToDoArray={setToDoArray} />
      ) : null}
      {/* <form className="input-field" onSubmit={handleSubmit}>
        <input
          type="text"
          id="todo-input"
          placeholder="Type in your todo..."
          value={inputState}
          onChange={handleChange}
        ></input>
        <button type="submit">Add task</button>
      </form> */}
      <div className="todo-list">
        {toDoArray
          .sort((a, b) => {
            return b.date - a.date;
          })
          .map((item) => (
            <div
              className={
                item.completed ? "todo-list-item completed" : "todo-list-item"
              }
              key={item.id}
              onClick={() => changeCompleted(item.id)}
            >
              {item.title}
              <div className="todo-list-date">
                {(() => {
                  switch (item.date) {
                    case new Date().toISOString().slice(0, 10):
                      return "Today";
                    case tomorrowDate.toISOString().slice(0, 10):
                      return "Tomorrow";
                    default:
                      return item.date;
                  }
                })()}
              </div>
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
