import React from "react";

function Square({ board, index, onClick }) {
  return (
    <button
      style={{
        width: 100,
        height: 100,
        margin: 10,
        lineHeight: 0,
      }}
      onClick={onClick}
    >
      {board[index] ? board[index] : "_"}
    </button>
  );
}

export default function App() {
  const [winner, setWinner] = React.useState("None");
  const [board, setBoard] = React.useState(Array(9).fill(""));
  const [whosTurn, setWhosTurn] = React.useState("x"); // x OR o

  const handleSquarePress = (index) => {
    if (board[index] || winner !== "None") return;
    board[index] = whosTurn;
    setBoard([...board]);
    checkWinner(board);
    setWhosTurn(whosTurn === "x" ? "o" : "x");
  };

  const checkWinner = (board) => {
    const moves = [];
    board.forEach((square, index) => {
      if (square === whosTurn) moves.push(index);
    });

    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];

    // Winner if some winning combo has every index in 'moves'
    const winner = winningCombos.some((combo) =>
      combo.every((index) => moves.includes(index))
    );
    if (winner) setWinner(whosTurn);
  };

  const resetGame = () => {
    setWinner("None");
    setBoard(Array(9).fill(""));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>Winner: {winner}</div>
      <button
        style={{
          width: 200,
        }}
        onClick={resetGame}
      >
        Reset Game
      </button>
      <div id="board">
        <Square board={board} index={0} onClick={() => handleSquarePress(0)} />
        <Square board={board} index={1} onClick={() => handleSquarePress(1)} />
        <Square board={board} index={2} onClick={() => handleSquarePress(2)} />
        <br />
        <Square board={board} index={3} onClick={() => handleSquarePress(3)} />
        <Square board={board} index={4} onClick={() => handleSquarePress(4)} />
        <Square board={board} index={5} onClick={() => handleSquarePress(5)} />
        <br />
        <Square board={board} index={6} onClick={() => handleSquarePress(6)} />
        <Square board={board} index={7} onClick={() => handleSquarePress(7)} />
        <Square board={board} index={8} onClick={() => handleSquarePress(8)} />
      </div>
    </div>
  );
}
