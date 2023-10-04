import { Button, Form, Input } from "antd";

import createQuestion from "../services/createQuestion.js";

function CreateQuestion() {
  const onFinish = async (values) => {
    const answers = [];

    answers.push(values.answerBody_1);
    answers.push(values.answerBody_2);
    answers.push(values.answerBody_3);

    values.answers = answers;

    await createQuestion(values);
  };
  return (
    <Form onFinish={onFinish}>
      <Form.Item name="title" label="title">
        <Input />
      </Form.Item>

      <Form.Item name="topic" label="topic">
        <Input />
      </Form.Item>

      <Form.Item name="level" label="level">
        <Input />
      </Form.Item>

      <Form.Item name="answerBody_1" label="answer">
        <Input />
      </Form.Item>

      <Form.Item name="answerBody_2" label="answer">
        <Input />
      </Form.Item>

      <Form.Item name="answerBody_3" label="answer">
        <Input />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit">Submeter</Button>
      </Form.Item>
    </Form>
  );
}

export default CreateQuestion;
