import { useId, useRef } from "react";
import "./index.css";
export const ForwardRef = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <BeforeReact19Input lable="username" ref={username} />
      <BeforeReact19Input lable="password" ref={password} />
    </form>
  );
};

// const BeforeReact19Input = forwardRef((props, ref) => {
//   const id = useId();
//   return (
//     <>
//       <label htmlFor={id}>{props.lable}</label>
//       <input type="text" ref={ref} />
//       <button>Submit</button>
//     </>
//   );
// });

const BeforeReact19Input = ({ lable, ref }) => {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>{lable}</label>
      <input id={id} type="text" ref={ref} />
      <button>Submit</button>
    </>
  );
};
