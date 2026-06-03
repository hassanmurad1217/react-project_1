import { useEffect, useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import {
  getLocalStorageTodoData,
  setLocalStorageTodoData,
} from "./TodoLocalStorage";

export const Todo = () => {
  const [task, setTask] = useState(() => getLocalStorageTodoData());

  // Sync tasks to local storage whenever they change
  useEffect(() => {
    setLocalStorageTodoData(task);
  }, [task]);

  // Handle adding a new task
  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) {
      return;
    }
    const ifTodoContentMatched = task.find(
      (currentTask) => currentTask.content === content
    );
    if (ifTodoContentMatched) {
      return;
    }
    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  // Handle deleting a todo by its content
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter(
      (currentTask) => currentTask.content !== value
    );
    setTask(updatedTask);
  };

  // Clear all tasks
  const handleClearTodoData = () => {
    setTask([]);
  };

  // Toggle checked state by content
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
