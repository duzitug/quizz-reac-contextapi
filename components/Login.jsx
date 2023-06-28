import React from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";
import AuthContext from "../context/AuthContext.js";

import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const { value, setValue } = React.useContext(AuthContext);

  const onFinish = async (values) => {
    console.log("Valores enviados: ", values);

    await axios
      .post(
        "https://quiz-backend-nodejs-express.fly.dev/api/user/signIn",
        values
      )
      .then((response) => {
        localStorage.setItem("token", response.data.user.token);
        setValue(response.data.user.token);
        if (response.status === 200) navigate("/");
      })
      .catch((error) => {
        if (error.response.status === 500) {
          alert("Login ou senha incorretos");
        }
      });
  };

  return (
    <Form onFinish={onFinish} style={{ width: "50%" }}>
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

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Entrar
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;
