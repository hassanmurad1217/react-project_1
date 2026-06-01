import { useEffect, useState } from "react";
import "./Todo.css";
import { MdCheck, MdDeleteForever } from "react-icons/md";
import { TodoForm } from "./TodoForm";

export const Todo = () => {
  const [task, setTask] = useState([]);
  const [DateTime, setDateTime] = useState("");

  const handleFormSubmit = (inputValue) => {
    // Empty input check
    if (!inputValue) {
      return;
    }

    // Duplicate check
    if (task.includes(inputValue)) return;

    // Add task
    setTask((prevTask) => [...prevTask, inputValue]);
  };

  // Todo Date and Time
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Todo handleDeleteTodo function
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask !== value);
    setTask(updatedTask);
  };

  // Todo handleClearTodoData function
  const handleClearTodoData = () => {
    setTask([]);
  };

  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>
          <h2 className="date-time">{DateTime}</h2>
        </header>

        <TodoForm onAddTodo={handleFormSubmit} />

        <section className="myUnorderedList">
          <ul>
            {task.map((curTask, index) => {
              return (
                <li key={index} className="todo-item">
                  <span>{curTask}</span>
                  <button className="check-btn">
                    <MdCheck />
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteTodo(curTask)}
                  >
                    <MdDeleteForever />
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
        <section>
          <button className="clear-all-tasks-btn" onClick={handleClearTodoData}>
            Clear All Tasks
          </button>
        </section>
      </section>
    </>
  );
};
