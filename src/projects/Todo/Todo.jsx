import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
export const Todo = () => {
  const [task, setTask] = useState([]);

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    // Empty input check
    if (!content) {
      return;
    }

    // Duplicate check
    // if (task.includes(inputValue)) return;
    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content,
    );
    if (ifTodoContentMatched) {
      return;
    }

    // Add task
    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  // Todo handleDeleteTodo function
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };

  // Todo handleClearTodoData function
  const handleClearTodoData = () => {
    setTask([]);
  };

  // Todo handleCheckTodo function
  const handleCheckTodo = (value) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === value) {
        return { ...curTask, checked: !curTask.checked };
      }
      return curTask;
    });
    setTask(updatedTask);
  }
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
            {task.map((curTask) => {
              return (
                <TodoList
                  key={curTask.id}
                  data={curTask.content}
                  onHandleDeleteTodo={handleDeleteTodo}
                  checked={curTask.checked}
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
