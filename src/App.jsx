import React from "react";
import QuizzContext from "../context/quizzContext.js";
import Welcome from "../components/Welcome.jsx";
import Question from "../components/Question.jsx";
import GameOver from "../components/GameOver.jsx";

function App() {
  const [quizzState] = React.useContext(QuizzContext);

  return (
    <div>
      {quizzState.gameStage === "Start" && <Welcome />}
      {quizzState.gameStage === "Playing" && <Question />}
      {quizzState.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App;
