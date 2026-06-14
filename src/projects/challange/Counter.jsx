import { useState } from "react";
import "./Counter.css";
export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="counterContainer">
        <h1>Use-state Challenge</h1>
        <p>
          count : <span>{count}</span>
        </p>
        <div>
          <label>
            step:
            <input type="number" />
          </label>
        </div>
        <div className="three-buttons">
          <button onClick={() => setCount(count + 1)} disabled={count === 100}>
            Increment
          </button>
          <button onClick={() => setCount(count - 1)} disabled={count === 0}>
            Decrement
          </button>
          <button>Reset</button>
        </div>
      </div>
    </>
  );
};
