import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
export const Todo = () => {
  const [task, setTask] = useState([]);

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
          <TodoDate />
        </header>

        <TodoForm onAddTodo={handleFormSubmit} />

        <section className="myUnorderedList">
          <ul>
            {task.map((curTask, index) => {
              return (
                <TodoList
                  key={index}
                  data={curTask}
                  onHandleDeleteTodo={handleDeleteTodo}
                />
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
