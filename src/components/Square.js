import React from "react";
const style = {
  background: "lightblue",
  border: "2px solid #009688",
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
  borderRadius: "10px",
  color: "rgb(15 49 56)",
};
function Square({ onClick, value }) {
  return (
    <button style={style} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
