import React, { useState } from "react";
import "./App.css";

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const evalResult = eval(expression);
        setResult(evalResult);
        setExpression("");
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setExpression("");
      setResult("");
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input className="input" type="text" value={expression} readOnly />
      <div className="result">{result}</div>
      <div className="buttons">
        {[7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "C", 0, "=", "/"].map(
          (value) => (
            <button
              className="btn"
              key={value}
              onClick={() => handleButtonClick(value)}
            >
              {value}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default App;
