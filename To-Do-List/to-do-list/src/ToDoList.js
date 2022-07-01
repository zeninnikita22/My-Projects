import React, { useState } from "react";
import InputField from "./InputField";
import { format } from "date-fns";

function ToDoList() {
  const [toDoArray, setToDoArray] = useState(
    JSON.parse(window.localStorage.getItem("todos")) || []
  );
  const [inputShow, setInputShow] = useState(false);
  const [addNewTodo, setAddNewTodo] = useState("+");

  const currentDate = new Date().toISOString().slice(0, 10);
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);

  // look at dependencies
  React.useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(toDoArray));
  }, [toDoArray]);

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

  const getDate = (date) => {
    switch (true) {
      case date < currentDate:
        return format(new Date(date), "PPP") + " (outdated)";
      case date === new Date().toISOString().slice(0, 10):
        return "Today";
      case date === tomorrowDate.toISOString().slice(0, 10):
        return "Tomorrow";
      default:
        return format(new Date(date), "PPP");
    }
  };

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
              <div className="todo-list-date">{getDate(item.date)}</div>
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
