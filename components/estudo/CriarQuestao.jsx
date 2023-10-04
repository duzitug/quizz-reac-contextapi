import React from "react";
import axios from "axios";

function CriarQuestao() {
  React.useEffect(() => {
    const newQuestion = {
      title: "titulo",
      topic: "topico",
      level: 50,
      answers: ["resposta 1", "resposta 2", "resposta 3"],
    };

    axios
      .post("http://localhost:3000/api/question", newQuestion)
      .then((response) => {
        console.log(response);
      });
  }, []);

  const onClick = () => {
    const newQuestion = {
      title: "titulo",
      topic: "topico",
      level: 50,
      answers: ["resposta 1", "resposta 2", "resposta 3"],
    };

    axios
      .post("http://localhost:3000/api/question", newQuestion)
      .then((response) => {
        console.log(response);
      });
  };

  return <button onClick={onClick}>Criar</button>;
}

export default CriarQuestao;
