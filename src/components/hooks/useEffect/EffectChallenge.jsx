import "./index.css";
import { useEffect, useState } from "react";

export const Challenge = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(`${name}`);
  }, [name]);
  useEffect(() => {
    document.title = `Count : ${count}`;
  }, [count]);

  return (
    <div className="container effect-container">
      <h1>Use Effect</h1>
      <p>
        Count : <span>{count}</span>
      </p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <p>
        Name : <span>{name}</span>
      </p>
      <input
        type="text"
        name="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
};
