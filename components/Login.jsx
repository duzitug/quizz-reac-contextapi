import React from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";

function Login({ onFinish }) {
  return (
    <Form
      onFinish={onFinish}
      labelCol={{
        span: 8,
      }}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Por favor, digite seu email." }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Senha"
        name="password"
        rules={[{ required: true, message: "Por favor, digite sua senha." }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
          Entrar
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;
