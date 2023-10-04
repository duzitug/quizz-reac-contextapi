import { Button, Form, Input } from "antd";

import userSignUp from "../services/userSignUp.js";

function UserSignUp() {
  const onFinish = async (values) => {
    const response = await userSignUp(values);

    console.log(values);

    console.log(response);
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item name="username" label="username">
        <Input />
      </Form.Item>

      <Form.Item name="email" label="email">
        <Input />
      </Form.Item>

      <Form.Item name="password" label="password">
        <Input />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit">Submeter</Button>
      </Form.Item>
    </Form>
  );
}

export default UserSignUp;
