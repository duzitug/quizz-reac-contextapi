import React from "react";
import { Button, Card } from "antd";

import getQuestions from "../services/getQuestions.js";

function ListQuestion() {
  const [total, setTotal] = React.useState(0);
  const [offset, setOffset] = React.useState(1);
  const [question, setQuestion] = React.useState(null);

  const nextQuestion = () => {
    // TODO: como impedir que o offset seja maior que o total?  (offset < total)
    if (offset < total - 1) setOffset(offset + 1);
    else alert("fim");
  };

  const previousQuestion = () => {
    if (offset > 1) setOffset(offset - 1);
  };

  React.useEffect(() => {
    getQuestions({ offset }).then(({ question, questionsCount }) => {
      setQuestion(question);
      if (offset === 1) setTotal(questionsCount);
    });
  }, [offset]);

  // inserir os dados da questão dentro de um Card
  return (
    <>
      <Card title={question?.title} style={{ width: 300 }}>
        {question?.answers.map((answer) => (
          <h2>{answer.body}</h2>
        ))}
      </Card>
      <h1> Total: {total} </h1>
      <h1>{question?.title}</h1>
      {question?.answers.map((answer) => (
        <h2>{answer.body}</h2>
      ))}
      <br />
      <Button onClick={nextQuestion} style={{ marginRight: 10 }}>
        Próxima
      </Button>
    </>
  );
}

export default ListQuestion;
