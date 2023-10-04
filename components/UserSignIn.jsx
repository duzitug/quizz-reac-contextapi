import React from "react";

import userSignIn from "../services/userSignIn.js";

import { Button, Form, Input } from "antd";

function UserSignIn() {
  const [token, setToken] = React.useState(null);

  const onFinish = async (values) => {
    debugger;

    const userToken = localStorage.getItem("userToken");

    if (!userToken) {
      // Se o identificador não existe, gerar um novo ID aleatório
      const userToken = Math.random().toString(36).slice(2, 12);

      localStorage.setItem("userToken", userToken);
    }

    values.userToken = userToken;

    const data = await userSignIn(values);

    setToken(data.user.token);
  };

  return (
    <>
      Token:
      {token}
      <Form onFinish={onFinish}>
        <Form.Item name="email">
          <Input />
        </Form.Item>

        <Form.Item name="password">
          <Input />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit">Submeter</Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default UserSignIn;
