import React from "react";
import QuizzContext from "../context/quizzContext.js";

function Welcome() {
  const [_, dispatch] = React.useContext(QuizzContext);

  return (
    <>
      <h1> Welcome component works! </h1>

      <button onClick={() => dispatch({ type: "START_GAME" })}>Iniciar</button>
    </>
  );
}

export default Welcome;
