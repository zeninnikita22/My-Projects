import React, { useState } from "react";
import InputField from "./InputField";

function ToDoList() {
  const [toDoArray, setToDoArray] = useState([]);
  const [inputShow, setInputShow] = useState(false);
  const [addNewTodo, setAddNewTodo] = useState("+");

  const currentDate = new Date().toISOString().slice(0, 10);
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);

  function showInput() {
    if (inputShow === false) {
      setInputShow(true);
    } else {
      setInputShow(false);
    }

    if (addNewTodo === "+") {
      setAddNewTodo("-");
    } else {
      setAddNewTodo("+");
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

  return (
    <div className="body-field">
      <div className="form-field">
        <button onClick={showInput} className="toggle-form-button">
          {addNewTodo} Add new todo
        </button>
        {inputShow ? (
          <InputField toDoArray={toDoArray} setToDoArray={setToDoArray} />
        ) : null}
      </div>
      <div className="todo-list">
        {toDoArray
          .sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
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
                  switch (true) {
                    case item.date < currentDate:
                      return (
                        item.date.toLocaleString().slice(0, 10) + " (outdated)"
                      );
                    case item.date === new Date().toISOString().slice(0, 10):
                      return "Today";
                    case item.date === tomorrowDate.toISOString().slice(0, 10):
                      return "Tomorrow";
                    default:
                      return item.date.toLocaleString().slice(0, 10);
                  }
                })()}
              </div>
            </div>
          ))}
      </div>
      <div
        className={
          toDoArray.length > 0 ? "delete-field" : "delete-field inactive"
        }
      >
        <button onClick={deleteCompleted}>Delete completed tasks</button>
      </div>
    </div>
  );
}

export default ToDoList;
