import React from "react";
import axios from "axios";

function LerQuestao() {
  const [questao, setQuestao] = React.useState({ title: "carregando" });

  React.useEffect(() => {
    axios
      .get("http://localhost:3000/api/question/851523332841603073")
      .then((response) => {
        console.log(response);
        setQuestao(response.data);
      });
  }, []);

  return (
    <>
      <h3>{questao.title}</h3>

      <h4>
        {questao.Answers?.map((answer) => {
          return (
            <p key={answer.id} onClick={() => console.log(answer)}>
              {answer.body}
            </p>
          );
        })}
      </h4>
    </>
  );
}

export default LerQuestao;
