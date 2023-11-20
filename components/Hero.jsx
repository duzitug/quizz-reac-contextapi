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
        }}
      >
        <Title level={1} align="center">
          Ipojuca Science
        </Title>

        <Title level={5} align="center">
          Um blog sore ciência.
        </Title>

        <Row justify={"center"} style={{ marginTop: "1rem" }}>
          <Button size="large">Ver Artigos</Button>
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
