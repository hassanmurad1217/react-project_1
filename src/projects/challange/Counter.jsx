import { useState } from "react";
import "./Counter.css";
export const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState("");
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
            <input
              type="number"
              value={step}
              onChange={(e) => setStep(e.target.value)}
            />
          </label>
        </div>
        <div className="three-buttons">
          <button
            onClick={() => setCount(Math.min(100, count + Number(step || 0)))}
            disabled={count >= 100}
          >
            Increment
          </button>

          <button
            onClick={() => setCount(Math.max(0, count - Number(step || 0)))}
            disabled={count <= 0}
          >
            Decrement
          </button>
          <button
            onClick={() => {
              setCount(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};
