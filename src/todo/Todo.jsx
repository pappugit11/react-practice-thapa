import React, { useEffect, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");

  const [task, setTask] = useState([]);

  const [dateTime, setDateTime] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      let date = new Date();
      let currTime = date.toLocaleTimeString();
      let currDate = date.toLocaleDateString();
      setDateTime(`${currTime} ${currDate}`);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleForm = (e) => {
    e.preventDefault();

    if (!inputValue) return;

    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }

    setTask((prevTask) => [...prevTask, inputValue]);

    setInputValue("");
  };

  const deleteHandler = (task_item) => {
    console.log(task_item);
    const updatedTask = task.filter((task, ind) => {
      return task_item !== task;
    });
    setTask(updatedTask);
  };
  const clearHandler = () => {
    setTask([]);
  };

  return (
    <>
      <div className="wrapper">
        <header>
          <h1>Todo List</h1>
          <p>{dateTime}</p>
        </header>
        <div className="form_wrapper">
          <TodoForm
            handleForm={handleForm}
            inputValue={inputValue}
            handleInputChange={handleInputChange}
          />

          <div className="task_list_wrapper">
            <ul className="task_list">
              {task.map((task_item, ind) => {
                return <TodoList ind={ind} task_item={task_item} />;
              })}
            </ul>

            <div className="card_footer">
              <button
                className="btn btn-danger clear_btn"
                onClick={clearHandler}
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
