import React from "react";
import QuizzContext from "../context/quizzContext.js";

function GameOver() {
  const [_, dispatch] = React.useContext(QuizzContext);

  return (
    <>
      <h1> GameOver component works! </h1>

      <button onClick={() => dispatch({ type: "BACK_TO_MENU" })}>
        Reiniciar
      </button>
    </>
  );
}

export default GameOver;
