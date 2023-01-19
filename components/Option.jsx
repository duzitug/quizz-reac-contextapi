import React from "react";
import QuizzContext from "../context/quizzContext.js";

function Option({ option }) {
  const [_, dispatch] = React.useContext(QuizzContext);
  return (
    <>
      <button
        onClick={() => dispatch({ type: "CHECK_ANSWER", payload: option })}
        style={{ display: "flex", marginBottom: 10 }}
      >
        {option}
      </button>
    </>
  );
}

export default Option;
