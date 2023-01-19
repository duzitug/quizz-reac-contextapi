import React from "react";
import Option from "./Option.jsx";
import QuizzContext from "../context/quizzContext.js";

function Question() {
  const [quizzState, dispatch] = React.useContext(QuizzContext);

  const index = quizzState.currentQuestion;

  return (
    <>
      <h1> Question component works! </h1>

      <button onClick={() => dispatch({ type: "NEXT_QUESTION" })}>
        Continuar
      </button>

      <h1> {quizzState.questions[index].title} </h1>

      <img src={quizzState.questions[index].url} />

      {quizzState.questions[index].options.map((option) => (
        <Option option={option} />
      ))}

      {quizzState.answer && <h5> Resposta correta </h5>}
    </>
  );
}

export default Question;
