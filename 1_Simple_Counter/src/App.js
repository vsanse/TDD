import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [hasError, setHasError] = useState(false);
  const handleCounter = () => {
    hasError && setHasError(false);
    setCount((prev) => prev + 1);
  };
  const handleCounterDecrement = () => {
    if(count === 0) {
      setHasError(true);
    } else {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <div className="App" data-test="component-app">
      <h1 data-test="counter-display">
        <span>The count is&nbsp;</span>
        <span data-test="counter-value">{count}</span>
      </h1>
      {hasError && (
        <h3 data-test="decrement-error"> Counter cannot go below 0</h3>
      )}
      <button onClick={handleCounter} data-test="increment-button">
        Increment counter
      </button>
      <button onClick={handleCounterDecrement} data-test="decrement-button">
        Decrement counter
      </button>
    </div>
  );
}

export default App;
