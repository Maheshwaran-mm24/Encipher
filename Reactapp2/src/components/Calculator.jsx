import { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(eval(input.replace(/x/g, "*")).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator-wrapper">
      <section className="calculator">
        <input type="text" className="display" value={input} readOnly />

        {[
          ["+", "-", "x", "/"],
          ["7", "8", "9", "4"],
          ["5", "6", "1", "2"],
          ["3", "0", ".", "C"],
        ].map((row, i) => (
          <div className="row" key={i}>
            {row.map((btn) => (
              <button
                key={btn}
                className={`btn ${
                  isNaN(btn) ? btn === "C" ? "clear" : "operator" : "number"
                }`}
                onClick={() => handleClick(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
        ))}

        <button className="equal" onClick={() => handleClick("=")}>
          =
        </button>
      </section>
    </div>
  );
}

