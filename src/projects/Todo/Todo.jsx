import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

export const Todo = () => {
  const [task, setTask] = useState([]);

  // Methods used:
  // - find(): checks if the same todo content already exists.
  // - setTask() with spread (...): creates a new array and appends new todo.
  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) {
      return;
    }

    const ifTodoContentMatched = task.find(
      (currentTask) => currentTask.content === content,
    );
    if (ifTodoContentMatched) {
      return;
    }

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  // Method used:
  // - filter(): returns a new array with all items except the one to remove.
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter(
      (currentTask) => currentTask.content !== value,
    );
    setTask(updatedTask);
  };

  // Method used:
  // - setTask([]): replaces current state with an empty array.
  const handleClearTodoData = () => {
    setTask([]);
  };

  // Methods used:
  // - map(): creates a new array by updating only the matched item.
  // - spread (...): copies existing todo properties before changing checked.
  const handleCheckTodo = (value) => {
    const updatedTask = task.map((currentTask) => {
      if (currentTask.content === value) {
        return { ...currentTask, checked: !currentTask.checked };
      }
      return currentTask;
    });
    setTask(updatedTask);
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
            {task.map((currentTask) => {
              return (
                <TodoList
                  key={currentTask.id}
                  data={currentTask.content}
                  onHandleDeleteTodo={handleDeleteTodo}
                  checked={currentTask.checked}
                  onHandleCheckTodo={handleCheckTodo}
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
