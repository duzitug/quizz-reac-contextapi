import React from "react";
import QuizzContext from "./quizzContext.js";
import questions from "../data/questions.js";

const STAGES = ["Start", "Playing", "End"];

const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  answer: false,
};

function quizzReducer(state, action) {
  switch (action.type) {
    case "START_GAME":
      return {
        ...state,
        currentQuestion: 0,
        gameStage: STAGES[1],
      };

    case "BACK_TO_MENU":
      return {
        ...state,
        gameStage: STAGES[0],
      };

    case "NEXT_QUESTION":
      //verificar o fim do array de questões
      if (state.currentQuestion === questions.length - 1)
        return {
          ...state,
          gameStage: STAGES[2],
        };

      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        answer: false,
      };

    case "CHECK_ANSWER":
      //checar se o item selecionado é o correto
      if (state.questions[state.currentQuestion].answer === action.payload)
        return {
          ...state,
          answer: true,
        };

      return state;
  }
}

function QuizzContextProvider({ children }) {
  const value = React.useReducer(quizzReducer, initialState);

  return (
    <QuizzContext.Provider value={value}>{children}</QuizzContext.Provider>
  );
}

export default QuizzContextProvider;
