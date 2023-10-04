import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import AuthContext from "../../context/AuthContext.js";
import Login from "../../components/Login.jsx";

import { Space, Row, Col } from "antd";

import { v4 as uuidv4 } from "uuid";

function LoginPage() {
  const navigate = useNavigate();

  const { setValue } = React.useContext(AuthContext);

  const onFinish = (values) => {
    let clientId = localStorage.getItem("clientId");

    if (clientId === null) {
      // const response = await axios.get("http://api.ipify.org");

      // const userIp = response.data;

      const uuid = uuidv4();

      localStorage.setItem("clientId", uuid);

      clientId = uuid;
    }

    axios
      .post("http://localhost:3000/api/user/signIn", values, {
        headers: {
          clientId: clientId,
        },
      })
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
