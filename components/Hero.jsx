import React from "react";
import { Space, Row, Col, Typography, Button, Image } from "antd";

import AuthContext from "../context/AuthContext.js";

const { Title, Text } = Typography;

function Hero() {
  const { value } = React.useContext(AuthContext);

  return (
    <>
      <Space
        direction="vertical"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Row align="center">
          <Title level={1}>Ipojuca Science</Title>
        </Row>

        <Row align="center">
          <Title level={5}>Um blog sore ciência.</Title>
        </Row>

        <Row align="center" style={{ marginTop: "1rem" }}>
          <Button size="large">Entrar</Button>
        </Row>
      </Space>

      {/* <Row>
        <Image
          about="Ipojuca Science"
          src="./undraw_mobile_user_re_xta4-preto.svg"
          preview={false}
          style={{ width: "50%" }}
        ></Image>
      </Row> */}

      <Row style={{ margin: "1rem", marginTop: "2rem" }} span>
        <img
          src="./undraw_mobile_user_re_xta4-preto.svg"
          alt=""
          style={{ width: "100%" }}
        />
      </Row>

      {/* <img src="./undraw_mobile_user_re_xta4-preto.svg" alt="" /> */}

      {/* <p> {value} </p> */}
    </>
  );
}

export default Hero;
