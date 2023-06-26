import React from "react";
import { Row, Col, Typography, Button, Image } from "antd";

const { Title, Text } = Typography;

const Hero = () => {
  return (
    <Row justify="center">
      <Col style={{ textAlign: "center" }}>
        <Image
          style={{ maxWidth: "60%" }}
          src="../public/transistor-science.gif"
        ></Image>

        <Title level={1}>Ipojuca Science</Title>

        {/* <Title level={4}>Ingrid Lima</Title> */}

        {/* <Button>Botão</Button> */}
      </Col>
      {/* <Col xs={24} md={12}>
        <img
          src="../public/bubble-gum-test-tubes-and-flask.gif"
          alt="Imagem"
          style={{ maxWidth: "100%" }}
        />
      </Col> */}
    </Row>
  );
};

export default Hero;
