import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import QuizzContext from "../context/quizzContext.js";
import Welcome from "../components/Welcome.jsx";
import Question from "../components/Question.jsx";
import GameOver from "../components/GameOver.jsx";
import Home from "../components/Home.jsx";
import UserSignIn from "../components/UserSignIn.jsx";
import UserSignUp from "../components/UserSignUp.jsx";
import CreateQuestion from "../components/CreateQuestion.jsx";
import ListQuestion from "../components/ListQuestion.jsx";
import LerQuestao from "../components/estudo/LerQestao.jsx";
import CriarQuestao from "../components/estudo/CriarQuestao.jsx";
import Hero from "../components/Hero.jsx";
import Estrutura from "../components/Estrutura.jsx";
import Login from "../components/Login.jsx";

function App() {
  const [quizzState] = React.useContext(QuizzContext);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Hero />} /> */}

        <Route path="/" element={<Estrutura />} />

        <Route path="/login" element={<Login />} />

        <Route path="/userSignIn" element={<UserSignIn />} />
        <Route path="/userSignUp" element={<UserSignUp />} />
        <Route path="/createQuestion" element={<CreateQuestion />} />
        <Route path="/listQuestion" element={<ListQuestion />} />

        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/" element={<CriarQuestao />} /> */}
      </Routes>
    </BrowserRouter>

    // <div>
    //   {quizzState.gameStage === "Start" && <Welcome />}
    //   {quizzState.gameStage === "Playing" && <Question />}
    //   {quizzState.gameStage === "End" && <GameOver />}
    // </div>
  );
}

export default App;
