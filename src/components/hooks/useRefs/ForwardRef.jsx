import { forwardRef, useId, useRef } from "react";

export const ForwardRef = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <BeforeReact19Input lable="username" ref={username} />
      <BeforeReact19Input lable="password" ref={password} />
    </form>
  );
};

const BeforeReact19Input = forwardRef((props, ref) => {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>{props.lable}</label>
      <input type="text" ref={ref} />
      <button>Submit</button>
    </>
  );
});
