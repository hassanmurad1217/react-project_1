import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState("");

  // Method used:
  // - setInputValue(): updates React state with latest text and default checked value.
  const handleInputChange = (value) => {
    setInputValue({
      id: value,
      content: value,
      checked: false,
    });
  };

  // Methods used:
  // - preventDefault(): stops page refresh on form submit.
  // - onAddTodo(): sends input data to parent component.
  // - setInputValue(): clears form state after submit.
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({
      id: "",
      content: "",
      checked: false,
    });
  };

  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={inputValue.content}
            onChange={(event) => handleInputChange(event.target.value)}
          />
        </div>

        <div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};
