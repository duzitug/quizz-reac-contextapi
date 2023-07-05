import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import AuthContext from "../../context/AuthContext.js";
import Login from "../../components/Login.jsx";

import { Space, Row, Col } from "antd";

function LoginPage() {
  const navigate = useNavigate();

  const { setValue } = React.useContext(AuthContext);

  const onFinish = async (values) => {
    console.log("Valores enviados: ", values);

    await axios
      .post("http://192.168.1.2:3000/api/user/signIn", values)
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
    <Row style={{ marginTop: "1rem" }}>
      <Col span={12}>
        <Login onFinish={onFinish} />
      </Col>
    </Row>
  );
}

export default LoginPage;
