import React from "react";
import { Card, Typography, Row, Col } from "antd";

const { Meta } = Card;
const { Title, Text } = Typography;

const ArticlePreviewCard = ({ title, author, date, description, image }) => {
  return (
    <>
      <Card
        hoverable
        style={{ width: "70%", margin: "auto", marginTop: "1rem" }}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={8} md={6} lg={4}>
            <img alt="Imagem do artigo" src={image} style={{ width: "90%" }} />
          </Col>
          <Col xs={24} sm={16} md={18} lg={20} style={{ paddingLeft: "100px" }}>
            <Meta
              title={<Title level={4}>{title}</Title>}
              description={
                <>
                  <Text>{description}</Text>
                  <br />
                  <Text type="secondary">
                    Por {author} em {date}
                  </Text>
                </>
              }
            />
          </Col>
        </Row>
      </Card>

      <Card
        hoverable
        style={{ width: "70%", margin: "auto", marginTop: "1rem" }}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={8} md={6} lg={4}>
            <img alt="Imagem do artigo" src={image} style={{ width: "90%" }} />
          </Col>
          <Col xs={24} sm={16} md={18} lg={20} style={{ paddingLeft: "100px" }}>
            <Meta
              title={<Title level={4}>{title}</Title>}
              description={
                <>
                  <Text>{description}</Text>
                  <br />
                  <Text type="secondary">
                    Por {author} em {date}
                  </Text>
                </>
              }
            />
          </Col>
        </Row>
      </Card>

      <Card
        hoverable
        style={{ width: "70%", margin: "auto", marginTop: "1rem" }}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={8} md={6} lg={4}>
            <img alt="Imagem do artigo" src={image} style={{ width: "90%" }} />
          </Col>
          <Col xs={24} sm={16} md={18} lg={20} style={{ paddingLeft: "100px" }}>
            <Meta
              title={<Title level={4}>{title}</Title>}
              description={
                <>
                  <Text>{description}</Text>
                  <br />
                  <Text type="secondary">
                    Por {author} em {date}
                  </Text>
                </>
              }
            />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default ArticlePreviewCard;
