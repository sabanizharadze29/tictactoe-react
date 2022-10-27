import React, { useState } from "react";
import Confetti from "react-confetti";
import { calculateWinner } from "../helper";
import Board from "./Board";
const style = {
  textAlign: "center",
};
const styleButton = {
  padding: "11px 23px",
  background: "linear-gradient(to right, #171717, #142b33, #171717)",
  border: "none",
  fontSize: "21px",
  wordSpacing: "6px",
  color: "#8cd5e4",
};
function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);

  const winner = calculateWinner(board);
  const handleClick = (i) => {
    const boardCopy = [...board];

    // if game won or clicked an accupied square
    if (winner || boardCopy[i]) return;

    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const startGame = () => (
    <button style={styleButton} onClick={() => setBoard(Array(9).fill(null))}>
      Start Game
    </button>
  );
  return (
    <div>
      <Board squares={board} onClick={handleClick} />
      <div style={style}>
        <p style={{ color: "#ffffffbd" }}>
          {winner
            ? "Winner: " + winner
            : "Next Player: " + (xIsNext ? "X" : "O")}
        </p>
        {startGame()}
      </div>
      {winner && <Confetti />}
    </div>
  );
}

export default Game;
