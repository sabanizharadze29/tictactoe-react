import React from "react";
import Square from "./Square";
const style = {
  border: "2px solid rgb(32 60 77)",
  borderRadius: "12px",
  width: "254px",
  height: "254px",
  margin: "0 auto",
  display: "grid",
  background: "rgb(29 50 63)",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
  gridGap: "5px",
  padding: "7px 7px",
};
function Board({ squares, onClick }) {
  return (
    <div style={style}>
      {squares.map((square, index) => {
        return (
          <Square key={index} value={square} onClick={() => onClick(index)} />
        );
      })}
    </div>
  );
}

export default Board;
