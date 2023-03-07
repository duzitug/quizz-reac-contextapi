import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import QuizzContext from "../context/quizzContext.js";
import Welcome from "../components/Welcome.jsx";
import Question from "../components/Question.jsx";
import GameOver from "../components/GameOver.jsx";
import Home from "../components/Home.jsx";
import UserSignIn from "../components/UserSignIn.jsx";

function App() {
  const [quizzState] = React.useContext(QuizzContext);

  return (
    <HashRouter>
      <Routes>
        <Route path="UserSignIn" element={<UserSignIn />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>

    // <div>
    //   {quizzState.gameStage === "Start" && <Welcome />}
    //   {quizzState.gameStage === "Playing" && <Question />}
    //   {quizzState.gameStage === "End" && <GameOver />}
    // </div>
  );
}

export default App;
