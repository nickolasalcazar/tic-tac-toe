import React from "react";
import "./App.css";
import Square from "./components/Square";

function App() {
  const [board, setBoard] = React.useState(Array(9).fill(""));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={{
          width: 200,
        }}
      >
        Reset Game
      </button>
      <div id="board">
        <Square />
        <Square />
        <Square />
        <br />
        <Square />
        <Square />
        <Square />
        <br />
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

export default App;
